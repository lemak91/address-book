import React, { useState } from 'react'

function User({u}) {
  const [show, showDetails] = useState(true)
  return (
    <div>
        <li>
            <p>{u.name.first} {u.name.last}</p>
            <img src={u.picture.thumbnail} alt=""></img><br></br>
            <button onClick={() => showDetails(true)}>Show Details</button>
        </li>
    </div>
  )
}

export default User