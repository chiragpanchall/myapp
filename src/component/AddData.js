import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const baseUrl = "https://reqres.in/api/users";

export const CreateData = () => {

    const [user, setUser] = useState({});

    function onChangeHandler(event) {
        setUser(user => ({ ...user, [event.target.name]: event.target.value }));
    }

    function saveDataHandler(e) {
        e.preventDefault();
        if (!user.email) {
            alert("Please enter email");
            return
        }

        if (!user.email.trim()) {
            alert("Please enter email it should not be empty");
            return
        }
        
        if (!user.email.includes('@')) {
            alert("Please enter email correct");
            return
        }

        if (!user.first_name) {
            alert("Please enter firstname");
            return
        }
        if (!user.first_name.trim()) {
            alert("Please enter firstname it should not be empty");
            return
        }
        if (!user.last_name) {
            alert("Please enter lastname");
            return
        }
        if (!user.last_name.trim()) {
            alert("Please enter lastname it should not be empty");
            return
        }

        // Finally adding data in system :
        axios.post(baseUrl, { user }).then(response => {
            if (response.status === 201) {
                alert('Data Added Successfully');
                console.log(response);
            }
            else {
                alert("Failed to add data");
            }
        })
        .catch(err => {
                alert("Failed to request data");
                console.error(err)
            });



    }

    return <>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column", margin:"100px"}}>
            <div>
                <h2>Create User</h2>
            </div>
            <div>
                Email <input type="email" name="email" value={user.email} onChange={onChangeHandler} required />
            </div>
            <div>
                first name <input type="text" name="first_name" value={user.first_name} onChange={onChangeHandler} required />
            </div>
            <div>
                last_name <input type="text" name="last_name" value={user.last_name} onChange={onChangeHandler} required />
            </div>
            <div>
                <button onClick={(e)=>saveDataHandler(e)}> Save </button>
            </div>
            <div>
                <Link to="/">Back to main page</Link>
            </div>
        </div>

    </>
}


// API Post https://reqres.in/api/users
// Body looks like
// {
//  "email": "george.blut1h@reqres.in",
//  "first_name": "TestUser",
//  "last_name": "User1"
// }
