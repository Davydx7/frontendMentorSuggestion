// import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.scss';
import { Props } from './typings';

import Tag from 'components/Tag';

const Sidebar: React.FC<Props> = () => (
	<div className="sidebar">
		<div className="hero">
			<h2>Frontend Mentor</h2>
			<span>Feedback Board</span>
		</div>
		<div className="tagsCard">
			<Tag clickable={true} isSelected={false} label="Bug" />
			<Tag clickable={true} isSelected={true} label="UI" />
			<Tag clickable={true} isSelected={false} label="UX" />
			<Tag clickable={true} isSelected={false} label="Enhancement" />
			<Tag clickable={true} isSelected={false} label="Bug" />
			<Tag clickable={true} isSelected={false} label="Feature" />
		</div>
		<div className="roadmapCard">
			<div>
				<span>Roadmap</span>
				<Link to="/">view</Link>
			</div>
			<ul>
				<li>Planned</li>
				<li>In-progress</li>
				<li>Live</li>
			</ul>
		</div>
	</div>
);

export default Sidebar;
