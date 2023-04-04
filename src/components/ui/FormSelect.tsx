import cx from 'classnames';
import {
	forwardRef,
	ForwardRefRenderFunction,
	SelectHTMLAttributes
} from 'react';

import FormErrorMessage from '@components/ui/FormErrorMessage';
import { SelectOption } from '@interfaces/selectOption.type';

type Props = {
	label?: string;
	error?: string;
	options: SelectOption[];
};

const FormSelect: ForwardRefRenderFunction<
	HTMLSelectElement,
	Props & SelectHTMLAttributes<HTMLSelectElement>
> = ({ label, error, options, ...props }, ref) => {
	return (
		<div className="w-full">
			<div className={cx(error ? 'text-red' : 'text-black')}>
				<select
					{...props}
					ref={ref}
					className={cx(
						'p-3 bg-zinc-100 h-12 w-full focus:outline-none rounded border focus:ring-4 capitalize',
						label && 'mt-1',
						error
							? 'border-red focus:border-red focus:ring-red/10'
							: 'border-zinc-800 focus:ring-zinc-300 focus:border-zinc-800'
					)}
				>
					<option value="" disabled hidden>
						{props.placeholder}
					</option>
					{options.map((option, index) => (
						<option key={index} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</div>
			{error && <FormErrorMessage>{error}</FormErrorMessage>}
		</div>
	);
};

export default forwardRef(FormSelect);
