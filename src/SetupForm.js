import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const {quiz, handleChange, handleSubmit, error} = useGlobalContext();

  return (
    <section className="quiz quiz-small">
    <form action="" className="setup-form" onSubmit={handleSubmit}>
      <h2>Setup Quiz</h2>
      <div className="form-control">
        <label htmlFor="amount">Number of Questions</label>
        <input type="number" name="amount" id="amount"
        className="form-input" value={quiz.amount} onChange={handleChange}
        min={1} max={50} />
      </div>

      <div className="form-control">
        <label htmlFor="category">Category</label>
        <select name="category" id="category" value={quiz.category} className="form-input" onChange={handleChange}>
          <option value="sports">sports</option>
          <option value="history">history</option>
          <option value="politics">politics</option>
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="difficulty">Select Difficulty</label>
        <select name="difficulty" id="difficulty" value={quiz.difficulty} className="form-input" onChange={handleChange}>
          <option value='easy'>easy</option>
          <option value='medium'>medium</option>
          <option value='hard'>hard</option>
        </select>
      </div>

      {error && (<p className="error">can't generate questions, please try different options</p>)
        }

        <button className="submit-btn">Start</button>


    </form>
  </section>
  )
}

export default SetupForm
