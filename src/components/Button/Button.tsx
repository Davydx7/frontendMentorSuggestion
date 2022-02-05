import classNames from 'classnames';
import React from 'react';

import { Props } from './typings';

// import IconPlus from 'assets/shared/icon-plus.svg';

import './Button.scss';

const Button = ({ onClick, text = 'Button Text', type = 'primary' }: Props) => (
	<button
		className={classNames('button', {
			cancel: type === 'cancel',
			danger: type === 'danger',
			primary: type === 'primary',
			secondary: type === 'secondary',
		})}
		onClick={onClick}
		type="button"
	>
		{text}
	</button>
);

export default Button;
