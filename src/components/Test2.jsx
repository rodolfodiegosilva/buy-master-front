import React from 'react'
import { useState, useContext, useEffect } from "react";
import UserDataContext from "../context/userData";

const Test2 = (props) => {
  const { userData } = useContext(UserDataContext);
  console.log(userData);
  useEffect(() => {
    //console.log(props)
  }, [])

  return (
    <>
      <h1>Test2</h1>
    </>
  );
}

export default Test2
