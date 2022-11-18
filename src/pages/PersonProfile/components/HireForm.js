import { useState } from 'react'
import { Link } from 'react-router-dom'

function HireForm(props) {
  const [wage, setWage] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <Link to="/">
        <button type="submit">Hire</button>
      </Link>
    </form>
  )
}

export default HireForm
