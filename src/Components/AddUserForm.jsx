import { useState } from 'react';

function AddUserForm({ addPerson }) {
	const [eneteredName, setEnteredName] = useState('');
	const [eneteredColor, setEnteredColor] = useState('');

	const nameHandler = (event) => {
		setEnteredName(event.target.value);
	};

	function inputValidation(enteredName) {
		return enteredName.length >= 3 && !/\d/.test(enteredName)
			? addPerson(enteredName, eneteredColor)
			: null;
	}

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

			<button type='submit' onClick={() => inputValidation(eneteredName)}>
				Add User
			</button>
		</form>
	);
}

export default AddUserForm;
