import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "../../Components/Profile";
import { getUser } from "../../feature/reducer/user";
import Layout from "../Layout";
const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      dispatch(
        getUser({
          pathOne: "auth",
          pathTwo: "getuser",
          _id: user._id,
          method: "get",
        })
      );
    }
  }, [user, dispatch]);

  return (
    <Layout footer={false}>
      <UserProfile />
    </Layout>
  );
};

export default Profile;
