import React, { useState, useEffect } from "react";

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [apiData, setApiData] = useState({})

    
    async function fetchToken(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username }),
            credentials: "include"
        };
        const response = await fetch('http://localhost:5000/login', requestOptions)
        const data = await response.json()
        return data;
    }

    function onButtonClick(e){
        fetchToken().then(data => {
            console.log(data)
            setApiData(data)
          });
        setUsername('')
    }

    function printApiData(){
        console.log(apiData);
    }

    async function clearCookie(){
            const response = await fetch('http://localhost:5000/clearcookie', {
              method: 'GET',
              credentials: 'include'
            });
      
            if (response.ok) {
              console.log('Cookie deleted successfully.');
            } else {
              console.error('Failed to delete cookie.');
            }
        };

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Login Page</div>
        </div>
        <div className={"inputContainer"}>
            <input
                value={username}
                placeholder="Enter your username here"
                onChange={ev => setUsername(ev.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        onButtonClick();}
                    }
                className={"inputBox"} />
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Login"} />
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={printApiData}
                value={"Print Stored API Data to Console"} />
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={clearCookie}
                value={"Clear Cookie"} />
        </div>
        <ol>
            <li>Type a username and hit the 'Login' button </li>
            <li>Attempt to access the <a href='http://localhost:5000/protected'>protected</a> route.</li>
            <li>If access is granted, cookie containing JWT was set successfully.</li>
            <li>Clear the cookie and try to access it again. If failed, means the cookie was deleted and logout was successful.</li>
        </ol>
    </div>
}

export default Login