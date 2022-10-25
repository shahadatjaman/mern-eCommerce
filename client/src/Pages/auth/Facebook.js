import { useState } from "react";

import { useDispatch } from "react-redux";

import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

import { GoogleWrape } from "./Styles";

import { authentication } from "../../firebase";

import { BsFacebook } from "react-icons/bs";
import { register } from "../../feature/reducer/user";
import { makeUserObj } from "../../utils";

const Facebook = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        const userInfo = result.user;

        let { displayName, email, photoURL } = userInfo;
        let user = makeUserObj({ displayName, email, photoURL });

        dispatch(register(user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <GoogleWrape onClick={signInWithGoogle}>
      <BsFacebook color="#3b5998" />
    </GoogleWrape>
  );
};

export default Facebook;
