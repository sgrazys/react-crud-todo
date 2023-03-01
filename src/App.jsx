import './App.css';
import { useState } from 'react';
import AddUserForm from './Components/AddUserForm';
import UserList from './Components/UserList';

function App() {
	const [person, setPerson] = useState([]);
	const [delCount, setDelCount] = useState(0);
	const [allCount, setAllCount] = useState(0);

	const addPerson = (name, color) => {
		setPerson((p) => [
			...p,
			{
				name,
				color,
				id: Math.random(),
			},
		]);

		setAllCount(person.length + delCount + 1);
	};

	const deleteCount = (count) => {
		setDelCount((prevVal) => prevVal + 1);
		console.log(delCount);

		setAllCount(person.length + delCount);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<div className='summary'>
					VISO: {allCount} PASALINTI: {delCount} ESAMI:{' '}
					{person.length}
				</div>
				<AddUserForm addPerson={addPerson} total />
				<UserList
					person={person}
					setPerson={setPerson}
					deleteCount={deleteCount}
				/>
			</header>
		</div>
	);
}

export default App;
