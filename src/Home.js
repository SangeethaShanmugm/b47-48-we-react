import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {

  const [username, setUserName] = useState("Mick");
  const [password, setPassword] = useState("Mick@123");
  const navigate = useNavigate()
  fetch('http://localhost:5000/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(username, password)
  })
    .then(data => console.log(data))
    .then(() => navigate("/book"))

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(e.target.value)

  }

  return (
    <div>
      <h1>Welcome to the Book App🥳🥳🥳</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} value={username} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

    </div>
  );
}
