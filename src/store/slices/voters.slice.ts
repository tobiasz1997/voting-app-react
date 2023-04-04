import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IVoter } from '@interfaces/voter.interface';

type votersStateType = {
	users: IVoter[];
};

const initialState: votersStateType = {
	users: [
		{
			id: 'eec4ab8a-00b1-46b6-ab88-07a546fa2581',
			name: 'Adam',
			voted: true
		},
		{
			id: '14261e8a-d764-4103-af13-5c235b2afdf9',
			name: 'julian',
			voted: false
		}
	]
};

const votersSlice = createSlice({
	name: 'voters',
	initialState: initialState,
	reducers: {
		addVoter(state, action: PayloadAction<Omit<IVoter, 'voted'>>) {
			state.users.push({
				id: action.payload.id,
				name: action.payload.name,
				voted: false
			});
		},
		setVoterVoteStatus(state, action: PayloadAction<string>) {
			const voter = state.users.find((x) => x.id === action.payload);
			if (voter) {
				voter.voted = true;
			}
		}
	}
});

export const { addVoter, setVoterVoteStatus } = votersSlice.actions;

export default votersSlice.reducer;
