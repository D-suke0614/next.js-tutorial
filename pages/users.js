import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('./api/users')
      const data = await res.json()
      setUsers(data.users)
    }
    fetchUser()
  }, [])

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{ user.name }</li>
        ))}
      </ul>
    </div>
  )
}
