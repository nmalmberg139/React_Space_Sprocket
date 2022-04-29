import NavBar from "./NavBar";
import {useState} from "react";
import button from "bootstrap/js/src/button";
import { useNavigate } from "react-router-dom";

function SpaceCreate(){
    const navigate = useNavigate();
    const [category, setCategory] = useState("Sprocket");
    const [item, setItem] = useState("");
    const [desc, setDesc] = useState("");
    const [count, setCount] = useState(0);
    const [cost, setCost] = useState(0.00);
    const [isPending, setIsPending] = useState(false);
    const submit = (e) =>{
        e.preventDefault();
       setIsPending(true);
        const part = {category, item, desc, count, cost}
        fetch("http://localhost:8000/sprockets", {
            method: 'POST',
            headers: {"Content-type": "application/json" },
            body: JSON.stringify(part)
        }).then(() => {
            setIsPending(false);
            alert("Added a new item");
            navigate('/sprockets');
        })
    }

    function checkPrice(e) {
        let num = parseFloat(e.target.value)
        if(num < 0){
            alert("There is no such thing as a negative price");
        }else{
            setCost(num);
        }
    }

    function changeCat(val) {
        setCategory(val.target.value);
    }

    return(
        <div className='Create'>
            <NavBar/>
            <h1 id='CreateTitle'>Create a new sprocket</h1>
            <div>
                <img src={require('./imgs/sprocket tank design.webp')} height='200' width='300' />
            </div>
            <h3>To create a new part, please fill out the following</h3>
            <form onSubmit={submit}>
                <label>What kind of part are you creating?</label>
                    <select>
                        <option value='Sprocket' onChange={changeCat}>Sprocket</option>
                        <option value="Cog" onChange={changeCat}>Cog</option>
                    </select>
            <br/>
                <div className='row'>
                    <div className='col' >
                        <label className="col-auto">Name of item</label>
                        <input type="text" placeholder="type in name of the item"  onChange={(e)=> setItem(e.target.value)} />
                    </div>
                    <div>
                        <label className="col-auto">Item description</label>
                        <textarea className="form-control" rows="1" placeholder="describe what this part does"  onChange={(e)=>setDesc(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        count <input type='number' min='0' placeholder='0' onChange={(e)=> {
                            let num = parseInt(e.target.value);
                            if(num<0){
                                alert("Cant have a negative number")
                            }else{
                                setCount(num);
                            }
                    }}/>
                    </div>
                    <div className="col">
                        price <input type='number' min='0.00' step='0.01' placeholder='0.00' onChange={checkPrice}/>
                    </div>
                </div>
                { !isPending && <button className='btn btn-success'>submit</button> }
            </form>
        </div>
    )
}export default SpaceCreate