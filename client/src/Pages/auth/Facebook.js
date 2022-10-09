import { useState } from "react";

import { useDispatch } from "react-redux";

import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

import { GoogleWrape } from "./Styles";

import { authentication } from "../../firebase";

import { BsFacebook } from "react-icons/bs";

const Facebook = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
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
