import { useState } from 'react';

function AddUserForm({ addPerson }) {
	const [enteredName, setEnteredName] = useState('');
	const [eneteredColor, setEnteredColor] = useState('#ffffff');

	const nameHandler = (event) => {
		setEnteredName(event.target.value);
	};

	function isInputValid(enteredName) {
		return enteredName.length >= 3 && !/\d/.test(enteredName);
	}

	const colorHandler = (event) => {
		setEnteredColor(event.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if (isInputValid(enteredName)) {
			addPerson(enteredName, eneteredColor);
			setEnteredName('');
			setEnteredColor('#ffffff');
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor='name'>Jusu vardas</label>
			<input
				type='text'
				id='name'
				value={enteredName}
				onChange={nameHandler}
			/>

			<label htmlFor='color'>Pasirinkite spalva</label>
			<input
				type='color'
				id='color'
				value={eneteredColor}
				onChange={colorHandler}
			/>

			<button type='submit'>Add User</button>
		</form>
	);
}

export default AddUserForm;
