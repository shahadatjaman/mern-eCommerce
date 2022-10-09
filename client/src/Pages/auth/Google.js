import { useState } from "react";

import { useDispatch } from "react-redux";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { GoogleWrape } from "./Styles";

import { authentication } from "../../firebase";

import { AiFillGooglePlusCircle } from "react-icons/ai";

import { addGoogleUser } from "../../feature/reducer/user/";

const Google = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const userInfo = result.user;

        const user = {
          username: userInfo.displayName,
          email: userInfo.email,
          avatar: userInfo.photoURL,
        };
        console.log(userInfo);
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
