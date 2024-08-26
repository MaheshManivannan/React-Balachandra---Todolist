

import ItemsList from "./ItemsList";
const Section = ({items,handleCheck,handleDelete}) => {
   

    return (
        <>
        <section>
        {
            (items.length>0) ?
            <ItemsList items = {items}
                       handleCheck = {handleCheck}
                       handleDelete = {handleDelete}
                       
            />
            : <h1 style={{color: "mediumblue"}}>List is empty</h1>
        }           
        </section>
        </>
    
    );
}
export default Section;