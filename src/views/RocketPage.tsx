import React, {FC} from "react";
import {NavLink} from 'react-router-dom';

import {useRouterLocation} from "../hooks/useRouterLocation";
import {useRocket} from "../queries/rocketKeys";

export const RocketPage: FC = () => {

    const {params} = useRouterLocation();
    const [rocket, {isLoading}] = useRocket(params.id)


    return (isLoading ? <div>Loading...</div> : <div>
        <h1>{rocket?.name}</h1>
        <p>{rocket?.description}</p>
        <p>Boosters: {rocket?.boosters}</p>
        <NavLink to="/">Back</NavLink>
    </div>);
}