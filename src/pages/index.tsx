import CandidatesTable from '@components/features/Home/CandidatesTable';
import VoteForm, { VoteFormPayload } from '@components/features/Home/VoteForm';
import VotersTable from '@components/features/Home/VotersTable';
import { addVoteForCandidate } from '@store/slices/candidates.slice';
import { setVoterVoteStatus } from '@store/slices/voters.slice';
import { useAppDispatch } from '@store/store';

export default function Home() {
	const dispatch = useAppDispatch();

	const handleVote = (payload: VoteFormPayload) => {
		dispatch(setVoterVoteStatus(payload.voterId));
		dispatch(addVoteForCandidate(payload.candidateId));
	};

	return (
		<main className="p-4 space-y-4">
			<section className="space-y-4">
				<h1 className="font-bold text-2xl">Voting app!</h1>
				<div className="grid sm:grid-cols-2 gap-5">
					<VotersTable />
					<CandidatesTable />
				</div>
			</section>

			<section className="space-y-4">
				<h1 className="font-bold text-2xl">Vote!</h1>
				<div>
					<VoteForm onSubmit={handleVote} />
				</div>
			</section>
		</main>
	);
}
