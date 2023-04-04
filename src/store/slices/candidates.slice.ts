import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICandidate } from '@interfaces/candidate.interface';

type candidatesStateType = {
	users: ICandidate[];
};

const initialState: candidatesStateType = {
	users: [
		{
			id: 'eec4ab8a-00b1-46b6-ab88-07a546222581',
			name: 'Andrzej',
			votesCount: 3
		},
		{
			id: '14261e8a-d764-4103-af13-5c277b2afdf9',
			name: 'adrian',
			votesCount: 0
		}
	]
};

const candidatesSlice = createSlice({
	name: 'candidates',
	initialState: initialState,
	reducers: {
		addCandidate(state, action: PayloadAction<Omit<ICandidate, 'votesCount'>>) {
			state.users.push({
				id: action.payload.id,
				name: action.payload.name,
				votesCount: 0
			});
		},
		addVoteForCandidate(state, action: PayloadAction<string>) {
			const candidate = state.users.find((x) => x.id === action.payload);
			if (candidate) {
				candidate.votesCount += 1;
			}
		}
	}
});

export const { addCandidate, addVoteForCandidate } = candidatesSlice.actions;

export default candidatesSlice.reducer;
