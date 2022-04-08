import React from "react";
import { Button } from "@mui/material";
import { accessUrl } from "../spotify";

export const Login = () => {
  return (
    <div>
      <h1>I am the login page</h1>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <Button href={accessUrl}>Login with spotify</Button>
    </div>
  );
};

