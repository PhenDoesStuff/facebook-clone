import {
	InsertEmoticon,
	PhotoLibrary,
	Videocam,
} from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './PostManager.css';
import { useStateValue } from '../../../../StateProvider';
import db from '../../../../firebase';
import firebase from 'firebase';

function PostManager() {
	const [{ user }, dispatch] = useStateValue();
	const [input, setInput] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		db.collection('posts').add({
			message: input,
			timestamp:
				firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			username: user.displayName,
			image: imageUrl,
		});

		setInput('');
		setImageUrl('');
	};

	return (
		<div className='PostManager'>
			<div className='PostManager__top'>
				<Avatar src={user.photoURL} />
				<form>
					<input
						value={input}
						onChange={e => setInput(e.target.value)}
						className='PostManager__input'
						placeholder={`What's on your mind, ${user.displayName}?`}
					/>
					<input
						value={imageUrl}
						onChange={e => setImageUrl(e.target.value)}
						placeholder='Image URL (optional)'
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
