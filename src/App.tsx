import { useReducer } from "react";
import "./App.css";
import { Child } from "./Child";
import { userNameReducer } from "./userNameReducer";

function App() {
  const [userName, dispatch] = useReducer(userNameReducer, "");

  const handleChange = () => {
    dispatch({
      type: "ADDED",
      payload: "Dr. Strange",
    });
  };

  const changeFromChild = () => {
    console.log("Change triggered from child");
  };

  console.log("username:", userName);
  return (
    <>
      <p onClick={handleChange}>Namn: </p>
      {userName}

      <Child change={changeFromChild} />
    </>
  );
}

export default App;
