import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../stylesheets/Header.css'

function Header({users, usersList, currentUser, setCurrentUser}) {
  const [formInput, setFormInput] = useState({
    username: "",
    password: ""
  })

  let navigate = useNavigate()

  // console.log(formInput)

  function controlFormInput(e) {
    const {name, value} = e.target
    setFormInput({
      ...formInput,
      [name]: value
    })
  }

  function onLogin(e) {
    e.preventDefault()
    if (usersList[formInput.username.toLowerCase()]) {
      if (usersList[formInput.username.toLowerCase()] === formInput.password) {
        console.log("user logged in")
        const id = users.find(user => user.username === formInput.username.toLowerCase()).id
        fetch(`http://localhost:3000/users/${id}`)
        .then(res => res.json())
        .then(data => {
          setCurrentUser(data)
          setFormInput({username: "", password: ""})
          navigate("/favorited")
        })
      } else {
        alert("Wrong username or password")
      }
    } else {
      alert("Wrong username or password")
    }
  }

  function onLogout() {
    setCurrentUser({})
    navigate("/")
  }

  function onSignUp() {
    const name = formInput.username.toLowerCase()
    if (usersList[name]) {
      alert("username already taken")
    } else {
      if(name.match(/^[\w]*$/g)) {
        if (name.match(/^[A-Za-z]/g)) {
          console.log("username ok")
          if (formInput.password.match(/^[\w\d~!@#$%^&*-=+?]+$/g)) {
            if (formInput.password.match(/^.{6,18}$/g)) {
              console.log("password ok")
              fetch(`http://localhost:3000/users`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify({
                  username: name,
                  password: formInput.password,
                  favorited: []
                })
              })
              .then(res => res.json())
              .then(data => {
                setCurrentUser(data)
                navigate("/favorited")
                setFormInput({
                  username: "",
                  password: ""
                })
                console.log(data)
              })
            } else {
              alert("password need to be between 6 - 18 charaters long")
            }
          } else {
            alert("username can only include alphabet letters, numbers and _~!@#$%^&*-=+?, cannot have space")
          }
        } else {
          alert("username must start with letter")
        }
      } else {
        alert("username can only include alphabet letters, numbers and '_', cannot have space")
      }
    }
  }

  return (
    <div id="header">
      <h1 id="header-title">
        <span>M</span>
        <span>A</span>
        <span>N</span>
        <span>G</span>
        <span>A</span>
        <span>N</span>
        <span>I</span>
        <span>M</span>
        <span>E</span>
      </h1>
      <div id="login-status">
        {currentUser.username ?
          (
            <div id="logout">
              <h3>Hi {currentUser.username.slice(0, 1).toUpperCase()}{currentUser.username.slice(1)}</h3>
              <button className="btn" onClick={onLogout} >Logout</button>
            </div>
          ) : (
            <form id="login-form" onSubmit={onLogin} >
              <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={formInput.username} onChange={controlFormInput} required />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formInput.password} onChange={controlFormInput} required />
              </div>
              <div>
                <input className="btn" type="submit" value="Login" />
                <input className="btn" type="button" value="Sign up" onClick={onSignUp} />
              </div>
            </form>
          ) 
        }
      </div>
    </div>
  );
}

export default Header;