import './index.scss'
import { useState } from 'react'
import { people } from './people'

import SearchBar from './components/SearchBar'
import CheckBox from './components/CheckBox'
import PersonCard from './components/PersonCard'

function App() {
  const [value, setValue] = useState('')
  const [checkBio, setCheckBio] = useState(false)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1>
            Search<span>Bar</span>
          </h1>
          <SearchBar onChange={onChange} value={value} />
          <CheckBox checkBio={checkBio} setCheckBio={setCheckBio} />
          <h2>Persons who reacted with 🥶</h2>

          {people.map((person, i) => {
            const name = person.firstName + ' ' + person.lastName
            if (
              name.toLowerCase().startsWith(value.toLowerCase()) ||
              person.lastName.toLowerCase().startsWith(value.toLowerCase())
            ) {
              if (checkBio && person.bio == null) {
                return null
              } else {
                if (person.reaction === '🥶') {
                  return (
                    <PersonCard
                      key={i}
                      img={person.image}
                      firstName={person.firstName}
                      lastName={person.lastName}
                      bio={person.bio}
                    />
                  )
                } else {
                  return null
                }
              }
            } else {
              return null
            }
          })}

          <h2>Persons who reacted with 💡</h2>
          {people.map((person, i) => {
            const name = person.firstName + ' ' + person.lastName
            if (
              name.toLowerCase().startsWith(value.toLowerCase()) ||
              person.lastName.toLowerCase().startsWith(value.toLowerCase())
            ) {
              if (checkBio && person.bio == null) {
                return null
              } else {
                if (person.reaction === '💡') {
                  return (
                    <PersonCard
                      key={i}
                      img={person.image}
                      firstName={person.firstName}
                      lastName={person.lastName}
                      bio={person.bio}
                    />
                  )
                } else {
                  return null
                }
              }
            } else {
              return null
            }
          })}
        </div>
      </div>
    </header>
  )
}

export default App
