import { AppStateType } from '../../store';

export const getProfileLoadingState = (state: AppStateType) => state.profile.status;
