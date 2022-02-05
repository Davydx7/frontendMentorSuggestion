import classNames from 'classnames';
import React from 'react';

import { Props } from './typings';

// import IconPlus from 'assets/shared/icon-plus.svg';

import './Button.scss';

const Button: React.FC<Props> = ({ children, onClick, text = 'Button Text', type = 'primary' }) => (
	<button className={classNames('btn', `${type}`)} onClick={onClick} type="button">
		{children || text}
	</button>
);

export default Button;
