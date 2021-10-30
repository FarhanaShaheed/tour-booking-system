import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data =>{
        fetch('https://safe-tundra-54858.herokuapp.com/services',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data =>{
      if(data.insertedId){
        alert('Service added successfully');
        reset();
      }
    })
    }

    return (
        <div className="hook-form">
            <h2>Yot can add more Services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>    <h6 style={{marginTop:'30px'}}>Enter the destination Name</h6>
                <input {...register("name")} placeholder="Name"/>

                 <br />
                 <h6 >Enter the image URL</h6>
                 <input {...register("img")} placeholder="img-url"/>
                 <br />            

                 <br />
                 <input type="submit" />
                 </form>
        </div>
    );
};

export default AddService;