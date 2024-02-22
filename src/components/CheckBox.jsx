import React from 'react'

function CheckBox({ checkBio, setCheckBio }) {
  return (
    <div
      style={{
        margin: '0px 0px 15px 10px',
        display: 'flex',
        fontSize: '16px',
      }}
    >
      <input
        type="checkbox"
        name="check"
        id="check"
        onChange={(e) => {
          if (checkBio === false) {
            setCheckBio(true)
          } else {
            setCheckBio(false)
          }
        }}
      />{' '}
      <p style={{ color: '#fff', marginLeft: '10px' }}>
        Only show people with bio
      </p>
    </div>
  )
}

export default CheckBox
