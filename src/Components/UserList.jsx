function UserList({ person, setPerson }) {
	const delHandler = () => {
		setPerson((s) => s.filter((s) => s.id !== person.id));
	};

	return (
		<ul>
			{person.map((e) => (
				<li key={e.id} style={{ color: e.color }}>
					{e.name}
					<button onClick={delHandler}>DEL</button>
				</li>
			))}
		</ul>
	);
}

export default UserList;
