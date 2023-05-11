import React from 'react'
import User from './User'

function Users({user}) {
    console.log(user)
  return (
    <div>
        <ol>
           {user.map((u, index) => (
            <User u={u} key={index} />
           ))}
        </ol>
    </div>
  )
}

export default Users