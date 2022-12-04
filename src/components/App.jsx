import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  //creating an object within the useState instead of a simple function in this case f and l name

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    //can re-write thiis by destructuring const [name, value] = event.target
    //therefore replacomh inputName with name, and newValue with value

    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue
        };
      }
    });
  }
  //using prevValue which allows us to store and interact with the previous set value instead of changing it
  // when fname is updatd it stays fname instead of resetting and changing into lname

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          //value = {fullName.fName}
        />

        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          //value = {fullName.lName}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
