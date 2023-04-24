import {QueryClient} from "@tanstack/react-query";
import React from "react";
import {RouteObject} from "react-router-dom";


import {prefetchRocket} from "../queries/rocketKeys";
import {RocketPage} from "../views/RocketPage";

export const rocketRoutes = (queryClient: QueryClient): RouteObject => {
    return {
        path: "/rocket/:id",
        loader: async ({params}) => {
            const data = await prefetchRocket(queryClient, params.id as string);
            return {data};
        },
        element: <RocketPage/>,

    }
}