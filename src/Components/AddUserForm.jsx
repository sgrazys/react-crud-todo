import { useState } from 'react';

function AddUserForm({ addPerson }) {
	const [eneteredName, setEnteredName] = useState('');
	const [eneteredColor, setEnteredColor] = useState('');

	const nameHandler = (event) => {
		if (
			event.target.value.trim().length >= 3 &&
			!/\d/.test(event.target.value)
		) {
			setEnteredName(event.target.value);
		}
	};

	const colorHandler = (event) => {
		setEnteredColor(event.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor='name'>Jusu vardas</label>
			<input type='text' id='name' onChange={nameHandler} />

			<label htmlFor='color'>Pasirinkite spalva</label>
			<input type='color' id='color' onChange={colorHandler} />

			<button
				type='submit'
				onClick={() => addPerson(eneteredName, eneteredColor)}
			>
				Add User
			</button>
		</form>
	);
}

export default AddUserForm;
