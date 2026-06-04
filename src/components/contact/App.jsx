import ContactLog from "./contactLog"

export default function App(){
   
 return(
    <>
    <div className="card-container">
     <ContactLog 
     name="Renu" 
     phoneNo="+91 6360558159" 
     email="renukaullegaddi03@gmail.com" 
     image="/Images/cat1.jpg"
     email_img="/Images/mail.png"
     call_img="/Images/call.svg"/>

     <ContactLog 
     name="Rashi" 
     phoneNo="+91 8765058159" 
     email="rashi@gmail.com" 
     image="/Images/Maine-Coon-Cat.jpg"
     email_img="/Images/mail.png"
     call_img="/Images/call.svg"/>

     <ContactLog 
     name="Daya" 
     phoneNo="+91 6360551234" 
     email="daya@gmail.com" 
     image="/Images/orange-cat.jpg"
     email_img="/Images/mail.png"
     call_img="/Images/call.svg"/>

     <ContactLog 
     name="Monica" 
     phoneNo="+91 6360559834" 
     email="daya@gmail.com" 
     image="/Images/Tabby_cat.jpg"
     email_img="/Images/mail.png"
     call_img="/Images/call.svg"/>
     </div>
    </>
 )
}