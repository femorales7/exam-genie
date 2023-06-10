import logo from './logo.svg';
import style from './index.module.css'
import{useState} from 'react'

function App() {
  const [queryDescription, setQueryDescription] = useState("")
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submited")
  }
  return (
  <main className={style.main}>
    <form onSubmit={onSubmit}> 
      <input
        type="text"
        name="query-description"
        placeholder="question"
        onChange={(e) => setQueryDescription (e.target.value)}
      />
      <input type="submit" value="genered question"/>
    </form>
  </main>
  );
}

export default App;
