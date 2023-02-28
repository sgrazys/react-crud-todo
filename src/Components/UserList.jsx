function UserList({ person, setPerson }) {
	const delHandler = (id) => {
		setPerson((s) => s.filter((s) => s.id !== id));
	};

	return (
		<ul>
			{person.map((e) => (
				<li key={e.id} style={{ color: e.color }}>
					{e.name}
					<button onClick={() => delHandler(e.id)}>DEL</button>
				</li>
			))}
		</ul>
	);
}

export default UserList;
