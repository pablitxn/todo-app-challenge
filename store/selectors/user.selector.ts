import { createSelector } from 'reselect';

import { IUserState } from 'types/user.types';

const getUser = (state: { user: IUserState }) => state.user.data;

export const userSelector = createSelector([getUser], (user) => user);
