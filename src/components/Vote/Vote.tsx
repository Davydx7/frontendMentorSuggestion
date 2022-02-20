import classNames from 'classnames';
import React, { useState } from 'react';

import './Vote.scss';
import { Props } from './typings';

import IconArrowUp from 'assets/shared/icon-arrow-up.svg';

const Vote: React.FC<Props> = ({ hasVoted = false, onClick, row = false, voteCount = 0 }) => {
	const [voted, setVoted] = useState(hasVoted);

	const handleSelect = () => {
		if (onClick) onClick();
		setVoted((prevState) => !prevState);
	};

	return (
		<button
			className={classNames('vote', { '--row': row, '--selected': voted })}
			onClick={handleSelect}
			type="button"
		>
			<IconArrowUp />
			<span>{voteCount}</span>
		</button>
	);
};

export default Vote;
