export default function Form(){
   const ingredients=["mango","apple","banana"]
   const ingredientsListItems=ingredients.map((ingredient)=>{
   return <li key={ingredient}>{ingredient}</li>
   })

   function handleSubmit(event){
     event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const newIngridient=formData.get("ingredient")
   }

    return(
    <>
    <main>
      <form onSubmit={handleSubmit} className="add-ingrident-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      <ul>
        {ingredientsListItems}
      </ul>
      </main>
    </>
    )
}