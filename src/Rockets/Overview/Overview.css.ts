import {style} from '@vanilla-extract/css';

export const grid = style({
    display:'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
});