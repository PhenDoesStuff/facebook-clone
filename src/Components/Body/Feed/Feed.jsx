import React from 'react';
import './Feed.css';
import Post from './Post/Post';
import PostManager from './Post/PostManager';
import StoryReel from './StoryReels/StoryReel';

function Feed() {
	return (
		<div className='feed'>
			<StoryReel />
			<PostManager />

			<Post
				profilePic='https://avatars.githubusercontent.com/u/61070214?v=4'
				message='Wow! This works'
				timestamp='This is a timestamp'
				username='Stephen Montague'
				image='https://wallpapercave.com/wp/wp4241382.jpg'
			/>
			<Post
				profilePic='https://avatars.githubusercontent.com/u/61070214?v=4'
				message='Wow! This works'
				timestamp='This is a timestamp'
				username='Stephen Montague'
			/>
		</div>
	);
}

export default Feed;
