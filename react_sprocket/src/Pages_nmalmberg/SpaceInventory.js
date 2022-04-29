import NavBar from "./NavBar";
import {useState} from "react";
import useFetch from "../useFetch";
import {useNavigate} from "react-router-dom";


function SpaceInventory(){
    const[table, setTable] = useState("")
    const {data : parts} = useFetch('http://localhost:8000/sprockets');
    const navigate = useNavigate();
    function updateTable(val) {
        let opt = val.target.value;
        if(opt === "none"){
            setTable("")
        }else{
            setTable(
                <div>
                <table className='table table-dark'>
                    <thead>
                    <tr><th>ID</th><th>Item</th><th>Count</th><th></th></tr>
                    </thead>
                    <tbody>
                    {parts.filter(item => item.category == opt).map((part) => (
                            <tr key={part.id}><td>{part.id}</td><td>{part.item}</td>
                                <td>{part.count}</td><td><button className='btn-primary' onClick={() =>{
                                    let path = `./${part.id}`
                                    navigate(path)
                                }}>Show details {part.id}</button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                </div>
            )
        }
    }
    function redirect() {
       let path = "/create"
        navigate(path);
    }
    return(
        <div className='Inventory'>
            <NavBar/>
            <img src={require('./imgs/Sprocket-types.jpg')} alt='space Inventory' height='200' width='300'/>
            <h1>Space Inventory</h1>
            <p>Please select one of the following</p>
            <select onChange={updateTable}>
                <option name='sproc' value='none'>none</option>
                <option name='sproc' value='Sprocket'>Sprocket</option>
                <option name='sproc' value='Cog'>Cog</option>
            </select>
            {table}
            <button type='button' className='btn btn-dark' onClick={redirect}>Create a new part</button>
        </div>
    )
} export default SpaceInventory