import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [errorState, setErrorState] = useState();

  const userName = useRef();
  const userAge = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const inputUsername = userName.current.value;
    const inputUserAge = userAge.current.value;

    if (inputUsername.trim().length === 0 || inputUserAge.trim().length === 0) {
      setErrorState({
        title: "Invalid input",
        message: "Please enter a valid name and age (non empty values).",
      });
      return;
    }
    if (+inputUserAge < 1) {
      setErrorState({
        title: "Invalid age",
        message: "Please enter a valid Age (> 0).",
      });

      return;
    }

    props.userDetails(inputUsername, inputUserAge);
    userName.current.value = "";
    userAge.current.value = "";
  };

  const modalStatehandler = () => {
    setErrorState(null);
  };

  return (
    <>
      {errorState && (
        <ErrorModal
          title={errorState.title}
          message={errorState.message}
          modalHandler={modalStatehandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={userName} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={userAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
