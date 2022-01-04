import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { useStateValue } from '../../../StateProvider';

function Sidebar() {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className='sidebar'>
			<SidebarRow
				src={user.photoURL}
				title={user.displayName}
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
