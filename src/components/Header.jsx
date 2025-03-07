import { Link } from "react-router-dom";
export default function Header() {

    return (
        <header>
            <nav style={{display: "flex", gap: "40px", justifyContent: "center"}}>
                <p>
                    <Link to="">Forside</Link>
                </p>
                <p>
                    <Link to="four">Jeg kan gætte din lærer</Link>
                </p>
            </nav>
        </header>
    )
}