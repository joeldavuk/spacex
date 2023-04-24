import { PartialDeep } from 'type-fest';

export const mock = <T>(obj?: PartialDeep<T>): T => (obj ?? {}) as T;