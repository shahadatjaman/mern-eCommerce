import { useState } from "react";

import { useDispatch } from "react-redux";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { GoogleWrape } from "./Styles";

import { authentication } from "../../firebase";

import { BsGithub } from "react-icons/bs";

const GitHub = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
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
      <BsGithub color="#171515" />
    </GoogleWrape>
  );
};

export default GitHub;
