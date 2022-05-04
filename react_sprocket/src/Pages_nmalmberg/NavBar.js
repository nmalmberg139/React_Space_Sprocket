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
                        <a className="nav-link" href="http://127.0.0.1:8000/customers">Space Customers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://127.0.0.1:8000/sales">Space Sales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://127.0.0.1:8000/report">Space Report</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
} export default NavBar;