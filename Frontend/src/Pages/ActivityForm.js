import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ActivityForm = () => {

    const empty = {
        name: "",
        phoneNo:"",
        date:"",
        month:"",
        activityType:"",
        amount:""
      };
      const [sessionEmail, setsessionEmail] = useState(null);
      const getSessionEmail = () => {
        setsessionEmail(sessionStorage.getItem("useremail"));
      };
      useEffect(()=>{
        getSessionEmail();
      },[]);
    const navigate=useNavigate();
    const [addActivity, setAddActivity]=useState(empty);
    
    const handleClick=(event)=>{
        const {name, value}= event.target;
        setAddActivity({...addActivity, [name]:value, email: sessionEmail})
    }

  const addActivityBtn = async () => {
    if(addActivity.name=="" || addActivity.activityType=="" || addActivity.phoneNo=="" || addActivity.date=="" || addActivity.month=="" || addActivity.amount==""){
        alert("please Enter Data in All fields!")
    }
    else{
      await fetch("http://127.0.0.1:4000/activitypost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addActivity),
      });
        alert("Activity added");
        setAddActivity(empty);
        navigate("/dashboard/activities")
    }
  };
  return (
    <>
      <div className="w-screen h-screen bg-gray-900 text-white bg-dark flex justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="form p-5 space-y-4 sm:w-1/2 w-4/12 bg-opacity-50 rounded-2xl border-red-800"
        >
          <h2 className="text-center text-3xl font-bold">Add Payment</h2>
          <input
            className="border-b-2 border-red-800 w-full bg-transparent text-white h-10"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleClick}
            value={addActivity.name}
          />

          <input
            className="border-b-2 border-red-800 w-full bg-transparent text-white h-10"
            type="number"
            name="phoneNo"
            min="1"
            placeholder="Phone no"
            onChange={handleClick}
            value={addActivity.phoneNo}
          />
          <input
            className="border-b-2 border-red-800 w-full bg-transparent text-white h-10"
            type="date"
            name="date"
            onChange={handleClick}
            value={addActivity.date}
          />

          <select
            className="border-b-2 border-red-800 w-full bg-transparent bg-dark text-white h-10"
            name="month"
            onChange={handleClick}
            value={addActivity.month}
          >
             <option className="text-gray-300 text-white bg-dark">Month</option>
              <option className="text-white bg-dark">Jan</option>
              <option className="text-white bg-dark">Feb</option>
              <option className="text-white bg-dark">March</option>
              <option className="text-white bg-dark">April</option>
              <option className="text-white bg-dark">May</option>
              <option className="text-white bg-dark">June</option>
              <option className="text-white bg-dark">July</option>
              <option className="text-white bg-dark">Aug</option>
              <option className="text-white bg-dark">Sep</option>
              <option className="text-white bg-dark">Oct</option>
              <option className="text-white bg-dark">Nov</option>
              <option className="text-white bg-dark">Dec</option>




          </select>


          <select
            className="border-b-2 border-red-800 w-full bg-transparent bg-dark text-white h-10"
            name="activityType"
            onChange={handleClick}
            value={addActivity.activityType}
          >
             <option className="text-gray-300 text-white bg-dark">Job Role</option>
              <option className="text-white bg-dark">HR Manager</option>
              <option className="text-white bg-dark">CEO</option>

          </select>
          <input
            className="border-b-2 border-red-800 w-full bg-transparent text-white h-10"
            type="number"
            name="amount"
            min="1"
            placeholder="Salary"
            onChange={handleClick}
            value={addActivity.amount}
          />

          <div className="flex justify-center mt-5">
            <button
              className="bg-red-800 bg-dark text-white p-3 rounded-full font-bold hover:bg-black"
              onClick={addActivityBtn}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );



};

export default ActivityForm;
