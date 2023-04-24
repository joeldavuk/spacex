import React, {FC} from "react";
import {NavLink} from "react-router-dom";

import {Rocket} from "../types";

import * as styles from "./Item.css";
import {ItemIcon} from "./ItemIcon";

export const Item: FC<Rocket> = ({name, id, engines}) => {

    const enginesToColour = () => {
        const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'purple', 'pink', 'black', 'white'];
        return colours[engines.number - 1];
    }

    return (<li className={styles.item} key={id}><NavLink to={`/rocket/${id}`}><span className={styles.icon}><ItemIcon
        colour={enginesToColour()}/></span>{name}</NavLink></li>)
}