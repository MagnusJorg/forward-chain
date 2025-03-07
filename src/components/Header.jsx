import { Link } from "react-router-dom";
export default function Header() {

    return (
        <header>
            <nav style={{display: "flex", gap: "20px"}}>
                <p>
                    <Link to="">Home</Link>
                </p>
                <p>
                    <Link to="zero">Natural Language Processing</Link>
                </p>
                <p>
                    <Link to="first">Exp. sys: Forward Chaining</Link>
                </p>
                <p>
                    <Link to="second">Exp. sys: Backward Chaining</Link>
                </p>
                <p>
                    <Link to="third">regner</Link>
                </p>
                <p>
                    <Link to="four">League</Link>
                </p>
            </nav>
        </header>
    )
}