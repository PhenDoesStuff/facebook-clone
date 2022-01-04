import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Body/Sidebar/Sidebar';
import Feed from './Components/Body/Feed/Feed';
import Widgets from './Components/Body/Widgets/Widgets';
import Login from './Components/Login/Login';
import { useStateValue } from './StateProvider';

function App() {
	const [{ user }, dispatch] = useStateValue();
	return (
		<div className='app'>
			{!user ? (
				<Login />
			) : (
				<>
					<Header />

					<div className='app__body'>
						<Sidebar />
						<Feed />
						<Widgets />
					</div>
				</>
			)}
		</div>
	);
}

export default App;
