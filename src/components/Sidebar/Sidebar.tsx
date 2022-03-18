import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.scss';
import { Props } from './typings';

import IconBar from 'assets/shared/icon-bar.svg';
import IconCross from 'assets/shared/icon-cross.svg';

import Tag from 'components/Tag';

const Sidebar: React.FC<Props> = () => {
	const [show, setShow] = useState(false);
	const [selected, setSelected] = useState('UI');

	const handleClick = (e) => {
		setSelected(e.target.innerText);
	};

	return (
		<div className="sidebar">
			<div className={classNames('overlay', { show })} onClick={() => setShow(false)} />
			<div className={classNames('background', { show })} />
			<div className="hero">
				<h2>Frontend Mentor</h2>
				<span>Feedback Board</span>
				{show
					? <IconCross className="icon" onClick={() => setShow(false)} />
					: <IconBar className="icon" onClick={() => setShow(true)} />}
			</div>
			<div className={classNames('tagsCard', { show })}>
				<Tag clickable={true} handleClick={handleClick} isSelected={selected === 'Bug'} label="Bug" />
				<Tag clickable={true} handleClick={handleClick} isSelected={selected === 'UI'} label="UI" />
				<Tag clickable={true} handleClick={handleClick} isSelected={selected === 'UX'} label="UX" />
				<Tag clickable={true} handleClick={handleClick} isSelected={selected === 'Feature'} label="Feature" />
				<Tag clickable={true} handleClick={handleClick} isSelected={selected === 'Bug'} label="Bug" />
				<Tag clickable={true} handleClick={handleClick} isSelected={selected === 'Enhancement'} label="Enhancement" />
			</div>
			<div className={classNames('roadmapCard', { show })}>
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
};

export default Sidebar;
