import {Title} from './title.tsx'
import {Hobby1} from "./hobby1/hobby1.tsx";
import {Intro} from "./intro.tsx"
import {names} from "./intro.tsx"
import './App.css'

function App() {
    const ourNames: names = {
        name1: "Owen",
        name2: "Matt",
    }

    return (
    <>
      <Title />
        <Intro name1={ourNames.name1} name2={ourNames.name2} />
        <div />
        <Hobby1 />
    </>
  )
}

export default App
