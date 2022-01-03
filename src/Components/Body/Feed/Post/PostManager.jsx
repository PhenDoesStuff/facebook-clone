import {
	InsertEmoticon,
	PhotoLibrary,
	Videocam,
} from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './PostManager.css';

function PostManager() {
	const [input, setInput] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		// some clever db stuff

		setInput('');
		setImageUrl('');
	};

	return (
		<div className='PostManager'>
			<div className='PostManager__top'>
				<Avatar />
				<form>
					<input
						value={input}
						onChange={e => setInput(e.target.value)}
						className='PostManager__input'
						placeholder={`What's on your mind?`}
					/>
					<input
						value={imageUrl}
						onChange={e => setImageUrl(e.target.value)}
						placeholder='image URL (optional)'
					/>
					<button onClick={handleSubmit} type='submit'>
						Hidden submit
					</button>
				</form>
			</div>
			<div className='PostManager__bottom'>
				<div className='PostManager__option'>
					<Videocam style={{ color: 'red' }} />
					<h3>Photo/Video</h3>
				</div>
				<div className='PostManager__option'>
					<PhotoLibrary style={{ color: 'green' }} />
					<h3>Feeling/Activity</h3>
				</div>
				<div className='PostManager__option'>
					<InsertEmoticon style={{ color: 'orange' }} />
					<h3>Live Video</h3>
				</div>
			</div>
		</div>
	);
}

export default PostManager;
