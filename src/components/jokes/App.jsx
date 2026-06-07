import Jokes from "./funPage"
import jokesData from "./jokeLib"

export default function App(){
    const jokeEle=jokesData.map((joke)=>{
      return <Jokes setup={joke.setup} punchline={joke.punchline} />
    })
    return(
        <>
          {jokeEle}
        </>
    )
}