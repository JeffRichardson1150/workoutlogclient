import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';  //1

/*
1. Our use of bootstrap is the same as in our Login component.  Ultimately, these forms contain the same information, but differ only in their titles and the action they initiate with our server when a successful user account is made or processed.
2. Once again, because our input fields are tied the state variables, which currently never change, their text content will be static as well (in this case it will be empty).
*/
const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/api/user", {
            method: 'POST',
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
        // console.log(username, password)
    }

    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                    {/* <Input onChange={(e) => e.target.value!=null ? setUsername(e.target.value) : <p>"user name is required"</p>} name="username" value={username}/> */}
                    {/* <Input name="username" value={username}/> 2 */}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                    {/* <Input name="password" value={password}/> 2 */}
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;