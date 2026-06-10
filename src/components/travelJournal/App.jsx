import Tour from './travelLog'
import travel from './travel'

export default function App(){
    const travelList=travel.map((list)=>{
       return <Tour key={list.id} place={list.place} budget={list.budget} />
    })
    return(
        <>
          {travelList}
        </>
    )
}