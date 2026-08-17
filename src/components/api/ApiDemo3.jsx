import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ApiDemo3 = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    console.log(data)
    data.age = parseInt(data.age)
    data.isActive = data.isActive == "true"?true:false
    console.log(data)
    
    const res = await axios.post("https://node5.onrender.com/user/user/", data);
    console.log(res);
    if (res.status == 200) {
      toast.success("user added !!");
      navigate("/apidemo1");
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ApiDemo2</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>email</label>
          <input type="text" {...register("email")}></input>
        </div>
        <div>
          <label>age</label>
          <input type="text" {...register("age")}></input>
        </div>
        <div>
          <label>password</label>
          <input type="text" {...register("password")}></input>
        </div>
        <div>
          <label>status</label>
          <input type="text" {...register("isActive")}></input>
        </div>
        <div>
          
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
