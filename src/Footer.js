const Footer = ({length}) => {

    return (
        <>
        <footer>
            <h3 style = {{backgroundColor: "brown",color: "white"}}>{length} list {length > 1 ? "items" : "item"}</h3>
        </footer>
        </>
    );
}
export default Footer;