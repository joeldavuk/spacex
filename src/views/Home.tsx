import React, {FC} from "react";

import {useRockets} from "../queries/rocketKeys";
import {Overview} from "../Rockets/Overview/Overview";

export const Home: FC = () => {

    const [rockets, {hasNextPage, isFetchingNextPage, fetchNextPage, isLoading}] = useRockets({
        initialLimit: 1,
        limit: 2,
    })
    const disabledState = !hasNextPage || isFetchingNextPage;

    return (isLoading ? <div>Loading...</div> : <div>
        {rockets && <Overview rockets={rockets}/>}
        <button onClick={() => void fetchNextPage()} disabled={disabledState}>Load More</button>
    </div>);
}