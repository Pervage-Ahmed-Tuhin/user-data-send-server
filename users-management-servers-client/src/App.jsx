
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])


  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    // console.log(name, email);

    const user = { name, email };
    console.log(user);

    // now we want to send this to the server site

    fetch('http://localhost:5000/users', {

      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)

    })
      .then(res => res.json())
      .then(data => {
        form.reset();
        const newUsers = [...users, data];
        setUsers(newUsers);
      })
  }

  return (
    <>


      <h1>Users Management system</h1>

      <h3>The number of users : {users.length}</h3>
      <form onSubmit={handleAddUser} >

        <input type="text" name="name" id="" />

        <br />

        <input type="text" name='email' />

        <br />

        <input type="submit" />

      </form>

      <div>

        {
          users.map(user => <p key={user.id}>{user.id}:{user.name}:{user.email}</p>)
        }
      </div>

    </>
  )
}

export default App
