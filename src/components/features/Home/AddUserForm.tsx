import { FC } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@components/ui/Button';
import FormInput from '@components/ui/FormInput';

type Props = {
	onSubmit: (payload: string) => void;
};

const AddUserForm: FC<Props> = (props) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<{ name: string }>({
		reValidateMode: 'onSubmit'
	});

	return (
		<form
			className="flex space-x-4"
			noValidate
			onSubmit={handleSubmit((payload) => props.onSubmit(payload.name))}
		>
			<fieldset className="flex-1">
				<FormInput
					{...register('name', {
						required: {
							value: true,
							message: 'Required field'
						}
					})}
					placeholder="Name"
					error={errors.name?.message}
				/>
			</fieldset>
			<div>
				<Button>Submit</Button>
			</div>
		</form>
	);
};

export default AddUserForm;
