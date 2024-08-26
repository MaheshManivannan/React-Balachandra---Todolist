import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({handleSubmit,newItem,setNewItem}) => {
    const inputRef = useRef();

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="addItem" style={{position: "absolute", left: "-99999px"}}>Add Item:</label>
            <input type="text"
                   id="addItem"
                   ref={inputRef}
                   placeholder="Add Item"
                   autoFocus
                   required
                   value={newItem}
                   onChange={(e) => setNewItem(e.target.value)}
                    />
            <button type="submit" onClick={() => inputRef.current.focus()}>
                <FaPlus />
            </button>
        </form>
        </>
    );
}
export default AddItem;