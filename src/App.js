import './App.css';
import { useState } from 'react';
import AddUserForm from './Components/AddUserForm';
import UserList from './Components/UserList';

function App() {

  const [person, setPerson] = useState([]);

  const addPerson = (name, color) => {
    setPerson((p) => [
      ...p,
      {
        name: name,
        color: color,
        id: Math.random()
      },
    ]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="summary">
          VISO:
          PASALINTI:
          ESAMI:
        </div>
        <AddUserForm addPerson={addPerson} />
        <UserList person={person} setPerson={setPerson} />

      </header>
    </div>
  );
}

export default App;
