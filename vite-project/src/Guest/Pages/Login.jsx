import React from "react";
import CustomForm from "../Components/CustomForm";

export default function Login() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <CustomForm />
    </div>
  );
}
