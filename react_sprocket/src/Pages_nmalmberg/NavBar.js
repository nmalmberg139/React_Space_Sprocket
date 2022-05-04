function NavBar(){
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <ul className="nav nav-pills">
                    <img src={require("./imgs/Space logo.jpg")}  width='50' height='50'/>
                    <li className="nav-item">
                        <a className="nav-link"  href="/home">Space Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/sprockets">Space Inventory</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/create">Space Create</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/customers">Customers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/sales">Sales</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
} export default NavBar;