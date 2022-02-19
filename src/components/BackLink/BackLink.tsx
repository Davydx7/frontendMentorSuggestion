import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import './BackLink.scss';
import { Props } from './typings';

import IconArrowLeft from 'assets/shared/icon-arrow-left.svg';

const BackLink: React.FC<Props> = ({ type = 'dark' }) => (
	<Link className={classNames('link', `${type}`)} to="/">
		<IconArrowLeft />
		{' '}
		<span>Go back</span>
	</Link>
);

export default BackLink;
