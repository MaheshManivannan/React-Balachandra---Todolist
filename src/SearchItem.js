const SearchItem = ({search, setSearch}) => {

    return (
        <>
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search" style={{position: "absolute", left: "-99999px"}}>Search:</label>
            <input type="text"
                   id="search"
                   placeholder="Seach Item"
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                    />
        </form>
        </>
    );
}
export default SearchItem;