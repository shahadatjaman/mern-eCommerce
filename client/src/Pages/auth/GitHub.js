import { useState } from "react";

import { useDispatch } from "react-redux";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { GoogleWrape } from "./Styles";

import { authentication } from "../../firebase";

import { BsGithub } from "react-icons/bs";
import { makeUserObj } from "../../utils";
import { register } from "../../feature/reducer/user/auth";
import { useNavigate } from "react-router-dom";

const GitHub = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        const userInfo = result.user;
        let { displayName, email, photoURL } = userInfo;
        let user = makeUserObj({ displayName, email, photoURL });

        dispatch(register(user));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <GoogleWrape onClick={signInWithGoogle}>
      <BsGithub color="#171515" />
    </GoogleWrape>
  );
};

export default GitHub;
