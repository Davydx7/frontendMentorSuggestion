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
				<h3>Roadmap</h3>
				<Link to="/">View</Link>
			</div>
			<ul>
				<li>
					<span className="dot planned" />
					Planned
					<span className="count">4</span>
				</li>
				<li>
					<span className="dot inProgress" />
					In-progress
					<span className="count">3</span>
				</li>
				<li>
					<span className="dot live" />
					Live
					<span className="count">5</span>
				</li>
			</ul>
		</div>
	</div>
);

export default Sidebar;
