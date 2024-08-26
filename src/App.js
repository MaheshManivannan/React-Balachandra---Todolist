import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import {useState,useEffect} from "react";
import "./App.css";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";
const App = () => {
const API_URL = "http://localhost:3500/items";
const [items,setItems] = useState([]);
const [newItem,setNewItem] = useState("");
const [search,setSearch] = useState("");
const [fetchError,setFetchError] = useState(null);
const [isLoading,setIsLoading] = useState(true);

//Read in CRUD below codes
useEffect(() =>{
  const fetchItems = async () => {
    try{
    const response = await fetch(API_URL);
    if(!response.ok) throw Error("Data not found");
    console.log(response);
    const listItems = await response.json();
    console.log(listItems);
    setItems(listItems);
    setFetchError(null)
    }
    catch(err){
      setFetchError(err.message);
      console.log(`error is ${err.stack}`);
    }
    finally{
      setIsLoading(false);
    }
  }
  setTimeout(
    () => {
      (async () => fetchItems())()
    }, 2000);
}, []);
const addItem = async (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const addNewItem = {id,item,checked: false};
  const listItems = [...items, addNewItem];
  setItems(listItems);

//create in CRUD
const postOptions =  {
  method: 'POST',
  headers: {
    'Content-Type': "appication/json"
  },  
  body: JSON.stringify(addNewItem)
}
  const result = await apiRequest(API_URL,postOptions)
  if(result) setFetchError(result)
}
const handleCheck = async(id) => {
let listItems = items.map((item) => (item.id === id) ? {...item, checked:!item.checked} : item);
setItems(listItems);

//Update in CRUD
const myItem = listItems.filter((item) => (item.id === id));
const updateOptions =  {
  method: 'PATCH',
  headers: {
    'Content-Type': "appication/json"
  },  
  body: JSON.stringify({checked:myItem[0].checked})
}
  const reqUrl = `${API_URL}/${id}`
  const result = await apiRequest(reqUrl,updateOptions)
  if(result) setFetchError(result)
}

const handleDelete = async(id) => {
let listItems = items.filter((item) => (item.id !== id) ? item : null);
setItems(listItems);

//Delete in CRUD
const deleteOptions = { method: 'DELETE' }
const reqUrl = `${API_URL}/${id}`
  const result = await apiRequest(reqUrl,deleteOptions)
  if(result) setFetchError(result)

}
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(newItem);
  addItem(newItem);
  setNewItem("");
}

  return (
    <>
    <div className="container">
    <Header />
    <AddItem handleSubmit = {handleSubmit}
             newItem = {newItem}
             setNewItem = {setNewItem}
    />
    <SearchItem search = {search}
                setSearch = {setSearch} 
    />
    <main>
      {isLoading && <p>Loading ...</p>}
      {fetchError && <p>{`Error: ${fetchError}`}</p>}
    {!isLoading && !fetchError && <Section items = {items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))}
             handleCheck = {handleCheck}
             handleDelete = {handleDelete}
    />}
    </main>
    <Footer length = {items.length}/>
    </div>
    </>
  );
}
export default App;