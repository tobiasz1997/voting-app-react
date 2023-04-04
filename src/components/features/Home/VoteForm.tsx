import { FC } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@components/ui/Button';
import FormSelect from '@components/ui/FormSelect';
import { SelectOption } from '@interfaces/selectOption.type';
import { useAppSelector } from '@store/store';

export type VoteFormPayload = {
	voterId: string;
	candidateId: string;
};

type Props = {
	onSubmit: (payload: VoteFormPayload) => void;
};

const VoteForm: FC<Props> = (props) => {
	const voters = useAppSelector((state) =>
		state.votersSlice.users.filter((x) => !x.voted)
	);
	const candidates = useAppSelector((state) => state.candidatesSlice.users);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<VoteFormPayload>({
		defaultValues: {
			candidateId: '',
			voterId: ''
		}
	});

	const votersSelectOptions: SelectOption[] = voters.map(
		(voter) => ({ label: voter.name, value: voter.id } as SelectOption)
	);
	const candidatesSelectOptions: SelectOption[] = candidates.map(
		(voter) => ({ label: voter.name, value: voter.id } as SelectOption)
	);

	const _submit = (data: VoteFormPayload) => {
		props.onSubmit(data);
		reset();
	};

	return (
		<form
			className="sm:flex sm:space-x-4 space-y-4 sm:space-y-0"
			noValidate
			onSubmit={handleSubmit(_submit)}
		>
			<fieldset className="flex-1 sm:flex w-full sm:space-x-4 space-y-4 sm:space-y-0">
				<FormSelect
					{...register('voterId', {
						required: {
							value: true,
							message: 'Required field'
						}
					})}
					placeholder="I am"
					error={errors.voterId?.message}
					options={votersSelectOptions}
				/>
				<FormSelect
					{...register('candidateId', {
						required: {
							value: true,
							message: 'Required field'
						}
					})}
					placeholder="I vote for"
					error={errors.candidateId?.message}
					options={candidatesSelectOptions}
				/>
			</fieldset>
			<div className="flex justify-end sm:block">
				<Button>Submit</Button>
			</div>
		</form>
	);
};

export default VoteForm;
