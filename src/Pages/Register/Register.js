import React from 'react';
import {useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from './../../hooks/useAuth';

const Register = () => {
    const { register, handleSubmit,reset} = useForm();
    const{user} = useAuth();
    const{name} = useParams();
    const onSubmit = data =>{
        fetch('http://localhost:5000/myBookings',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
    .then(result =>{
      if(result.insertedId){
        alert('Your tour added successfully');
        reset();
      }
      })
    }
    return (
        <div>
            <h2>You can register here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} {...register("name")} placeholder="Name"/>
      <br />
      <input defaultValue={user.email} {...register("email")} placeholder="email"/>
      <br />
      <input type="date" {...register("date")} placeholder="date"/>
      <br />
      <input type="number" {...register("phone")} placeholder="phone"/>
      
      <br />
      <input {...register("address")} placeholder="Address"/>
      <br />
      <input defaultValue={name} {...register("destinatio")}/>
      <br />
      <input type="submit" />
    </form>
        </div>
    );
};

export default Register;