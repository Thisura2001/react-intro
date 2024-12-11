import {Link} from "react-router";

export function Navigation() {
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <Link to="/add">AddCustomer</Link>
                        <Link to="/delete"> | DeleteCustomer</Link>
                        <Link to="/update"> | updateCustomer</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}