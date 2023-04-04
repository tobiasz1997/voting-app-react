import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { FC, PropsWithChildren, useState } from 'react';

import AddUserForm from '@components/features/Home/AddUserForm';
import Button from '@components/ui/Button';

type Props = {
	title: string;
	onAddUser: (payload: string) => void;
};

const TableCaption: FC<PropsWithChildren<Props>> = (props) => {
	const [isFormVisible, setIsFormVisible] = useState(false);

	return (
		<table className="w-full h-fit border-2 table-auto border-collapse">
			<caption className="p-3 border-x-2 border-t-2">
				<div className="flex items-center">
					<h2 className="flex-1 font-bold">{props.title}</h2>
					<Button
						size="small"
						icon={<PlusCircleIcon />}
						onClick={() => setIsFormVisible((prevState) => !prevState)}
					/>
				</div>
				{isFormVisible && (
					<div className="mt-3">
						<AddUserForm
							onSubmit={(payload) => {
								props.onAddUser(payload);
								setIsFormVisible(false);
							}}
						/>
					</div>
				)}
			</caption>
			{props.children}
		</table>
	);
};

export default TableCaption;
