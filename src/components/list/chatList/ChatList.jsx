import { useState } from 'react';
import './chatList.css';

const ChatList = () => {
	const [addMode, setaddMode] = useState(false);

	return (
		<div className="chatList">
			<div className="search">
				<div className="searchBar">
					<img src="./search.png" alt="" />
					<input type="text" placeholder="Search" />
				</div>
				<img src={addMode ? './minus.png' : './plus.png'} alt="" className="add" onClick={() => setaddMode((prev) => !prev)} />
			</div>
			<div className="item">
				<img src="./avatar.png" alt="" />
				<div className="texts">
					<span>Khanh Quang</span>
					<p>Hello</p>
				</div>
			</div>
			<div className="item">
				<img src="./avatar.png" alt="" />
				<div className="texts">
					<span>Khanh Quang</span>
					<p>Hello</p>
				</div>
			</div>
			<div className="item">
				<img src="./avatar.png" alt="" />
				<div className="texts">
					<span>Khanh Quang</span>
					<p>Hello</p>
				</div>
			</div>
			<div className="item">
				<img src="./avatar.png" alt="" />
				<div className="texts">
					<span>Khanh Quang</span>
					<p>Hello</p>
				</div>
			</div>
		</div>
	);
};

export default ChatList;
