import React, {FC} from "react";

import {Item} from "../Item/Item";
import {Rocket} from "../types";

import * as styles from "./Overview.css";

interface RocketOverviewProperties {
    rockets: Rocket[];
}

export const Overview: FC<RocketOverviewProperties> = ({rockets}) => {

    return <ul className={styles.grid}>{rockets.map((rocket) => <Item {...rocket} />)}</ul>;
}