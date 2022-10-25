import { useState } from "react";

import { useDispatch } from "react-redux";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { GoogleWrape } from "./Styles";

import { authentication } from "../../firebase";

import { AiFillGooglePlusCircle } from "react-icons/ai";

import { register } from "../../feature/reducer/user/";
import { makeUserObj } from "../../utils";

const Google = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        const userInfo = result.user;
        console.log(userInfo);
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
      <AiFillGooglePlusCircle color="#ee3d43" />
    </GoogleWrape>
  );
};

export default Google;
