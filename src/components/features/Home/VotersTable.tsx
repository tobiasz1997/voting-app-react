import { XMarkIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TableCaption from '@components/features/Home/TableCaption';
import { addVoter } from '@store/slices/voters.slice';
import { useAppDispatch, useAppSelector } from '@store/store';

const VotersTable: FC = () => {
	const voters = useAppSelector((state) => state.votersSlice.users);
	const dispatch = useAppDispatch();

	const handleAddUser = (name: string) => {
		dispatch(addVoter({ id: uuidv4(), name }));
	};

	return (
		<TableCaption title="Voters" onAddUser={handleAddUser}>
			<thead>
				<tr className="w-full text-center font-bold">
					<th className="w-[1fr] p-3 border">Name</th>
					<th className="p-3 w-28 border">Has voted</th>
				</tr>
			</thead>
			<tbody>
				{voters.map((voter) => (
					<tr key={voter.id} className="text-sm text-center">
						<td className="p-3 border capitalize">{voter.name}</td>
						<td className="p-3 border">
							<div className="flex justify-center items-center">
								{voter.voted ? (
									<CheckIcon className="h-4 w-4 text-green" />
								) : (
									<XMarkIcon className="h-4 w-4 text-red" />
								)}
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</TableCaption>
	);
};

export default VotersTable;
