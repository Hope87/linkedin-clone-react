import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { auth } from "../../firebase";
import { login } from "../../features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "Email") {
      setEmail(value);
    } else if (name === "Password") {
      setPassword(value);
    } else if (name === "Name") {
      setName(value);
    } else if (name === "Profile") {
      setProfile(value);
    } else {
      return;
    }
  };

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a fuul name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profile,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profile,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
        alt=""
      />

      <form action="">
        <input
          name="Name"
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="Fuul name (required)"
        />
        <input
          name="Profile"
          value={profile}
          onChange={handleChange}
          type="text"
          placeholder="Profile pic URL (optional)"
        />
        <input
          name="Email"
          value={email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />
        <input
          name="Password"
          value={password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
