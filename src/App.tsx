import React, {FC} from "react";
import {Outlet} from "react-router-dom";

import * as styles from "./App.css";

export const App: FC = () => {

    return (
        <div className={styles.container}>
            <Outlet/>
        </div>


    )
}
