import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TableCaption from '@components/features/Home/TableCaption';
import { addCandidate } from '@store/slices/candidates.slice';
import { useAppDispatch, useAppSelector } from '@store/store';

const CandidatesTable: FC = () => {
	const candidates = useAppSelector((state) => state.candidatesSlice.users);
	const dispatch = useAppDispatch();

	const handleAddUser = (name: string) => {
		dispatch(addCandidate({ id: uuidv4(), name }));
	};

	return (
		<TableCaption title="Candidates" onAddUser={handleAddUser}>
			<thead>
				<tr className="w-full text-center font-bold">
					<th className="w-[1fr] p-3 border">Name</th>
					<th className="p-3 w-28 border">Votes</th>
				</tr>
			</thead>
			<tbody>
				{candidates.map((candidate) => (
					<tr key={candidate.id} className="text-sm text-center">
						<td className="p-3 border capitalize">{candidate.name}</td>
						<td className="p-3 border">{candidate.votesCount}</td>
					</tr>
				))}
			</tbody>
		</TableCaption>
	);
};

export default CandidatesTable;
