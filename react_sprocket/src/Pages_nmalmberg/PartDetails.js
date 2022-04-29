import useFetch from "../RouterCRUD_31/useFetch";
import {useNavigate, useParams} from "react-router-dom";
import NavBar from "./NavBar";
import {confirmAlert} from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

function PartDetails() {
    const {id} = useParams()
    const navigate = useNavigate();
    const {data: item, isPending} = useFetch('http://127.0.0.1:8000/sprockets/' + id);
    const del = () => {
        confirmAlert({
            message: "Are you sure you want to delete this item?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => DeleteIt()
                },
                {
                    label: 'No',

                }
            ]
        })
    }
        function DeleteIt() {
            const url = 'http://127.0.0.1:8000/sprockets/' + id
            fetch(url, {
                method: 'DELETE',
                header: {"Content-type": "application/json"}
            }).then(() => {
                alert("It is done");
                navigate("/sprockets")
            })
        }

        return (
            <div className='partDetails'>
                <NavBar/>
                <h2>Details on part {id}</h2>
                {isPending && (
                    <div><img src={require("./imgs/ben-redblock-loading.gif")} width='100' height='100'/></div>)}
                {item && (
                    <div>
                        <img src={require("./imgs/show me the details.webp")} height='150' width='150'/>
                        <article>
                            <p><strong>Category: </strong> {item.category}</p>
                            <p><strong>Item Name: </strong>{item.item}</p>
                            <p><strong>Description: </strong>{item.desc}</p>
                            <p><strong>In stock: </strong>{item.count}</p>
                            <p><strong>Price: </strong> ${item.cost}</p>
                            <p>
                                <button type='button' className="btn btn-danger" onClick={del}>Delete {item.id}</button>
                            </p>


                            <p>
                                <button className='btn-primary' onClick={() => {
                                    let path = `/sprockets`
                                    navigate(path)
                                }}>Back
                                </button>
                            </p>
                        </article>
                    </div>
                )}

            </div>
        )
}
       {/*() =>{}*/}
       {/*const confirm = window.confirm(`Are you sure you want to delete ${item.item}?`)*/}
       {/*if(confirm === true){*/}
       {/*//     DeleteIt();*/}
       {/*// }*/}
 export default PartDetails;