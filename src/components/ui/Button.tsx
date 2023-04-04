import cx from 'classnames';
import { ButtonHTMLAttributes, cloneElement, FC, ReactElement } from 'react';

type buttonSizes = 'default' | 'small';

type Props = {
	size?: buttonSizes;
	icon?: ReactElement;
};

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement> & Props> = ({
	size = 'default',
	icon,
	...props
}) => {
	const sizes: Record<buttonSizes, string> = {
		small: 'h-9 text-sm',
		default: 'h-12'
	};

	return (
		<button
			{...props}
			className={cx(
				'flex items-center justify-center rounded focus:outline-none focus:ring-4 text-zinc-900 bg-zinc-200 hover:bg-zinc-200/[0.7] hover:shadow-xl focus:ring-zinc-400 font-bold px-3',
				props.className,
				sizes[size]
			)}
		>
			{
				<>
					{icon ? (
						<span className="flex items-center justify-center">
							{cloneElement(
								icon,
								{
									className: 'w-5 h-5'
								},
								null
							)}
						</span>
					) : (
						<span>{props.children}</span>
					)}
				</>
			}
		</button>
	);
};

export default Button;
