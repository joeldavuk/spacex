import {createQueryKeys} from "@lukemorales/query-key-factory";
import {
    QueryClient,
    QueryFunctionContext,
    QueryKey,
    useInfiniteQuery,
    UseInfiniteQueryResult,
    useQuery,
    UseQueryResult,
} from "@tanstack/react-query";

import {API_BASE_URL} from "../constants";
import {Rocket} from "../Rockets/types";

const DEFAULT_LIMIT = 1;

interface RocketQueryResponse extends RocketPaging {
    docs: Rocket[];
    totalDocs: number;
    offset: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: null | number;
    nextPage: number;
}

interface RocketPaging {
    offset: number;
    limit: number;
}

interface RocketPageParameter {
    /**
     * Number of results to fetch when the next page is requested.
     *
     * @default see DEFAULT_LIMIT
     */
    limit?: number;

    /**
     * Number of results to initially fetch when the hook is called.
     * Defaults to the limit when not specified.
     *
     * @default limit
     */
    offset?: number;
}

interface RocketPagingOptions extends RocketPageParameter {
    initialLimit?: number;
}

export const rocketKeys = createQueryKeys("rockets", {
    all: ({limit, initialLimit, offset}: { limit: number; initialLimit: number, offset: number }) => ({
        queryKey: [
            {
                limit,
                initialLimit,
                offset
            },
        ],
        queryFn: async ({pageParam: pageParameter = {limit: initialLimit, offset: offset}}: QueryFunctionContext<
            QueryKey,
            RocketPageParameter
        >): Promise<RocketQueryResponse> => {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"options": pageParameter, "query": {"type": "rocket"}}),
            };
            const result = await fetch(
                `${API_BASE_URL}/rockets/query`,
                options
            );
            return result.json().then((data: RocketQueryResponse) => data);
        },
    }),
    detail: (rocketId: string) => ({
        queryKey: [rocketId],
        queryFn: async (): Promise<Rocket> => {
            const result = await fetch(`${API_BASE_URL}/rockets/${rocketId}`);
            return result.json().then((data: Rocket) => data);
        },
    }),
});

export const useRockets = (
    options: RocketPagingOptions = {}
): [Rocket[] | undefined, UseInfiniteQueryResult<RocketQueryResponse>] => {
    const {limit = DEFAULT_LIMIT, initialLimit = limit, offset = 0} = options;
    const query = useInfiniteQuery({
        ...rocketKeys.all({limit, initialLimit, offset}),
        getNextPageParam: (lastPage): RocketPaging | undefined => {
            const newOffset = lastPage.offset + lastPage.page;

            if (newOffset <= (lastPage.totalPages ?? Number.POSITIVE_INFINITY)) {
                return {
                    limit,
                    offset: newOffset,
                };
            }
        },
    });

    const rockets = query.data?.pages.flatMap((response: RocketQueryResponse) => response.docs);

    return [rockets, query];
};

export const useRocket = (
    id: string
): [Rocket | undefined, UseQueryResult<Rocket>] => {
    const query = useQuery({...rocketKeys.detail(id)});
    const rocket = query.data;

    return [rocket, query];
};

export const prefetchRocket = async (
    queryClient: QueryClient,
    id: string,
): Promise<void> => {
    const query = rocketKeys.detail(id);
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.prefetchQuery(query));
};
