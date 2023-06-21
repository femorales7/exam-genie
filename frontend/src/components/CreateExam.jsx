const createExam = (props) => {

  const examOnSubmit = (e) => {
    e.preventDefault();

    const exam = { createExam }
    fetch('http://localhost:8080/exam', {
      method: 'POST',
      headers: { "Content-Type" : "application/json"},
      body: JSON.stringify(exam)
    }).then(() => {
      console.log("exam created")
    })
  }

  return (
    <>
     <form onSubmit={examOnSubmit}>
      <h2>Create your exam</h2>
      <input 
      type="text"
      placeholder="Create your exam"
      value={props.createExam}
      required
      onChange={(e) => {
        props.setCreateExam(e.target.value)
      }}
      />
      <button type="submit">Create</button>
     </form>
    </>
  )
}

export default createExam