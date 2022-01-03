import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Body/Sidebar/Sidebar';
import Feed from './Components/Body/Feed/Feed';
import Widgets from './Components/Body/Widgets/Widgets';

function App() {
	return (
		<div className='app'>
			<Header />

			<div className='app__body'>
				<Sidebar />
				<Feed />
				<Widgets />
			</div>
		</div>
	);
}

export default App;
