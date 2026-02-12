export default function Navbar({title,links=[]}){
    return(
        <nav className="navbar">
        <h2>{title}</h2>
        <ul>
            {links.map((link,i)=>(
                <li key={i}>{link}</li>
            ))}
        </ul>
        </nav>
    );
}