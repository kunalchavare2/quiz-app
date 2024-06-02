import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { VALIDATE_URL } from "../../utils/constant/url-const";
import Cookies from "universal-cookie";
import { login, logout } from "../../store/AuthSlice/AuthSlice";
import { toast } from "react-toastify";

const GuardedRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const cookies = new Cookies();

    Axios.get(
      VALIDATE_URL,

      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.get("access_token")}`,
        },
      }
    )
      .then((response) => {
        if (response.data.isLoggedIn) {
          if ("accessToken" in response.data) {
            cookies.set("access_token", response.data.accessToken);
          }
          dispatch(login());
          setLoading(false);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        setLoading(false);

        dispatch(logout());
        toast.error(error.message);
      });
  }, []);

  if (loading) {
    return null;
  }

  if (!isAuth) return <Navigate to="/auth/login" replace={true} />;

  return children;
};

export default GuardedRoute;
