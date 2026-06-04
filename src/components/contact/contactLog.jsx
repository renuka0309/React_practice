export default function ContactLog(props){
    return(
        <>
          <div className="card">
            <div className="catImage">
              <img src={props.image} width="200px" height="250px"></img>
            </div>
         
            <h3 className="text">{props.name}</h3>

            <div className="phoneNo">
               <img src={props.call_img} 
                   alt="phone logo">
               </img>

                <span>{props.phoneNo}</span>
            </div>

            <div className="mail">
              <img src={props.email_img} 
                  alt="mail logo">
               </img>
              <span>{props.email}</span>
            </div>
          </div>
        </>
    )
}