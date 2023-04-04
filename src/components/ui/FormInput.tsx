import cx from 'classnames';
import {
	forwardRef,
	ForwardRefRenderFunction,
	InputHTMLAttributes
} from 'react';

import FormErrorMessage from '@components/ui/FormErrorMessage';

type Props = {
	label?: string;
	error?: string;
};

const FormInput: ForwardRefRenderFunction<
	HTMLInputElement,
	Props & InputHTMLAttributes<HTMLInputElement>
> = ({ label, error, ...props }, ref) => {
	return (
		<div className="w-full">
			<div className={cx(error ? 'text-red' : 'text-black')}>
				<input
					{...props}
					ref={ref}
					className={cx(
						'p-3 bg-zinc-100 h-12 w-full rounded border focus:outline-none focus:ring-4',
						label && 'mt-1',
						error
							? 'border-red focus:ring-red/10'
							: 'border-zinc-800 focus:ring-zinc-300'
					)}
				/>
			</div>
			{error && <FormErrorMessage>{error}</FormErrorMessage>}
		</div>
	);
};

export default forwardRef(FormInput);
