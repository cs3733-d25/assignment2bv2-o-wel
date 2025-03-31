import {Title} from './title.tsx'
import {Hobby1} from "./hobby1/hobby1.tsx";
import {Hobby2} from "./hobby2/hobby2.tsx";
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
        <hr />
        <div />
        <Hobby1 />
        <div />
        <Hobby2 />
    </>
  )
}

export default App