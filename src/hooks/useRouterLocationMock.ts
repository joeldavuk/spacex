import { PartialDeep } from 'type-fest';

import * as RouterLocation from './useRouterLocation';

export const createUseRouterLocationMock = (
    initial?: PartialDeep<RouterLocation.Location>,
): jest.SpiedFunction<typeof RouterLocation.useRouterLocation> => {
    return jest.spyOn(RouterLocation, 'useRouterLocation').mockReturnValue({
        params: {},
        pathname: '/uk',
        search: {},
        ...initial,
    } as RouterLocation.Location);
};