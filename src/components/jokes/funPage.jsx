export default function Jokes(props){
    return(
        <>
          <div>
            {props.setup && <h3>setup: {props.setup}</h3>}
            <h3>punchilne: {props.punchline}</h3>
            <hr />
          </div>
        </>
    )
} 
