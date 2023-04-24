import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {App} from "./App";
import {rocketRoutes} from "./routes/rocket.routes";
import {Home} from "./views/Home";

const fiveMinutes = 5 * 60 * 1000
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: fiveMinutes,
            refetchOnWindowFocus: false,
        },
    },
});
const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <App/>
        ),
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                ...rocketRoutes(queryClient),
            }
        ]
    },
]);

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    </React.StrictMode>
);