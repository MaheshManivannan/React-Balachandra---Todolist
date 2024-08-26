import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({handleCheck,handleDelete,item}) => {

    return (
        <>
        <li>
                    <input type="checkbox"
                           onChange={() => handleCheck(item.id)}
                           checked={item.checked} />
                    <label style={(item.checked === true) ? {textDecoration: "line-through"} : null} 
                    onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                    <FaTrashAlt 
                    role="button"
                    onClick={() => handleDelete(item.id)}
                    />
                </li>
        </>
    );
}
export default LineItem;