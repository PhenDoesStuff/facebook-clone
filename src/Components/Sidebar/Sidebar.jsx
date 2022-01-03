import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

function Sidebar() {
	return (
		<div className='sidebar'>
			<SidebarRow
				src='https://avatars.githubusercontent.com/u/61070214?v=4'
				title='Stephen Montague'
			/>
			<SidebarRow
				Icon={LocalHospitalIcon}
				title='COVID-19 Information Center'
			/>
			<SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
			<SidebarRow Icon={ChatIcon} title='Friends' />
			<SidebarRow
				Icon={StorefrontIcon}
				title='Marketplace'
			/>
			<SidebarRow Icon={VideoLibraryIcon} title='Videos' />
			<SidebarRow
				Icon={ExpandMoreOutlinedIcon}
				title='Marketplace'
			/>
		</div>
	);
}

export default Sidebar;
