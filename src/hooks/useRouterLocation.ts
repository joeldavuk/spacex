import {useParams, useLocation, useSearchParams} from 'react-router-dom';

export interface Location {
    /**
     * The pathname for the current route.
     */
    pathname: string;

    /**
     * The matched router path params for the current route.
     */
    params: Record<string, string>;

    /**
     * The search params (query params) for the current route.
     */
    search: Record<string, string>;

    /**
     * The hash for the current route, or empty string if there is no hash value.
     */
    hash: string;
}
export const useRouterLocation = (): Location => {
    const reactRouterLocation = useLocation();
    const reactRouterParams = useParams();
    const [reactRouterSearchParams] = useSearchParams();

    return {
        pathname: reactRouterLocation.pathname,
        search: Object.fromEntries(reactRouterSearchParams),
        params: reactRouterParams as Record<string, string>,
        hash: reactRouterLocation.hash || '',
    };
};