import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import candidatesSlice from '@store/slices/candidates.slice';
import votersSlice from '@store/slices/voters.slice';

const store = configureStore({
	reducer: {
		votersSlice,
		candidatesSlice
	}
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
