import classNames from 'classnames';
import React from 'react';

import './Button.scss';
import { Props } from './typings';

const Button: React.FC<Props> = ({ children, onClick, text = 'Button Text', type = 'primary' }) => (
	<button className={classNames('btn', `btn--${type}`)} onClick={onClick} type="button">
		{children || text}
	</button>
);

export default Button;
