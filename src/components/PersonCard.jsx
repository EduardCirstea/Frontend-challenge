import React from 'react'

function PersonCard({ img, firstName, lastName, bio }) {
  return (
    <div className="person-card">
      <img src={img} alt="" />
      <div>
        <p>{firstName + ' ' + lastName}</p>
        <p>{bio}</p>
      </div>
    </div>
  )
}

export default PersonCard
