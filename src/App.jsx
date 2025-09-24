import React, { useState } from 'react'

export default function App() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ])

  const [query, setQuery] = useState('')
  const [result, setResult] = useState(null)

  function handleSearch(e) {
    e.preventDefault()
    const q = query.trim()
    if (q === '') {
      
      setResult({ found: false })
      return
    }
    const found = dictionary.find(item => item.word.toLowerCase() === q.toLowerCase())
    if (found) {
      setResult({ found: true, meaning: found.meaning })
    } else {
      setResult({ found: false })
    }
  }

  return (
    <div className="container">
      <h1>Dictionary App</h1>

      <form onSubmit={handleSearch} className="search-form">
        <input
          aria-label="search-input"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter a word (e.g., Component)"
        />
        <button type="submit">Search</button>
      </form>

      <div className="result">
      
        <h3>Definition:</h3>
        {result === null ? (
          
          <p>Word not found in the dictionary.</p>
        ) : result.found ? (
          <p>{result.meaning}</p>
        ) : (
          
          <p>Word not found in the dictionary.</p>
        )}
      </div>
    </div>
  )
}
