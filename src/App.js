
import React from 'react'
import AddUser from './Components/AddUser'
import UserList from './Components/UserList'
function App() {
  return (
    <div>
      <AddUser />
      <UserList users={[]}/>
    </div>
  )
}

export default App