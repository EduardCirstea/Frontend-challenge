import React from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchBar({ onChange, value }) {
  return (
    <div className="input-control">
      <input type="text" onChange={onChange} value={value} />
      <FaSearch className="icon" style={{ color: '#000', fontSize: '18px' }} />
    </div>
  )
}

export default SearchBar
