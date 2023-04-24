import { render, screen } from '@testing-library/react';
import React from "react";
import {BrowserRouter} from "react-router-dom";

import '@testing-library/jest-dom'; //TODO remove from here
import {mock} from "../../test/helpers/mock";
import {Rocket} from "../types";

import {Item} from "./Item";


describe("Item", () => {

    it("renders the rocket name", () => {
        const rocket = mock<Rocket>(
            {
                name: 'Falcon One',
                engines:{
                    number:1
                },
            },
        )
        render(<Item {...rocket} />, {wrapper: BrowserRouter})
        expect(screen.getByText('Falcon One')).toBeInTheDocument();
    })
})