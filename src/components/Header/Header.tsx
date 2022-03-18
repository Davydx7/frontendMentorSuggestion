import classNames from 'classnames';
import React from 'react';

import { Props } from './typings';

import IconBulb from 'assets/shared/icon-bulb.svg';
// Uncomment after backlink is approved and merged with dev
// import BackLink from 'components/BackLink';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';

import './Header.scss';

const Header: React.FC<Props> = ({ type = 'suggestion' }) => (
	<div className={classNames('header', `--${type}`)}>
		{(type === 'suggestion')
			? (
				<React.Fragment>
					<IconBulb className="icon_bulb" />
					<div className="suggestion_counter">
						<span>80</span>
						{' '}
						Suggestions
					</div>
					<span>Sort by:</span>
					<Dropdown
						closeOnSelect={true}
						onSelect={(x) => {
						// eslint-disable-next-line no-console
							console.info(x);
						}}
						options={[
							{
								label: 'Most Upvotes',
								value: 'most upvotes',
							},
							{
								label: 'Least Upvotes',
								value: 'least upvotes',
							},
							{
								label: 'Most Comments',
								value: 'most comments',
							},
							{
								label: 'Least Comments',
								value: 'least comments',
							},
						]}
						selected={{
							label: 'Most Upvotes',
							value: 'most upvotes',
						}}
					/>
				</React.Fragment>
			)
			: (
				<div>
					{/* uncomment after backlink is merged into dev */}
					{/* <BackLink type="light" /> */}
					<h1>Roadmap</h1>
				</div>
			)}

		<Button>+ Add Feedback</Button>
	</div>
);

export default Header;
