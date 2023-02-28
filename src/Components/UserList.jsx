function UserList({ person }) {
	return (
		<ul>
			{person.map((e) => (
				<li key={e.id} style={{ color: e.color }}>
					{' '}
					{e.name}{' '}
				</li>
			))}
		</ul>
	);
}

export default UserList;
