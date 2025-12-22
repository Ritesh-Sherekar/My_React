
import { useState } from "react";

function FrontEnd(){

    const [details, setDetails] = useState({"name": "",
                                            "email": "",
                                            "mobileNumber": ""});

     const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:9876/userTable/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(details)
    });

    alert("Data saved successfully!");
  };


    return(
        <>
        <h2>Add User Details</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Name ..." onChange={handleChange}/> <br />
            <input type="text" name="email" placeholder="Enter Email ..." onChange={handleChange}/> <br />
            <input type="text" name="mobileNumber" placeholder="Enter Mobile Number ..." onChange={handleChange}/> <br />
            <button type="submit">Submit</button>
        </form>
        </>
    );
}

export default FrontEnd