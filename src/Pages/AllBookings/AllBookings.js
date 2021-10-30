import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const AllBookings = () => {
    const [allBookings, setAllBookings] = useState();
    console.log(allBookings);
    useEffect(()=>{
        fetch('http://localhost:5000/myBookings')
        .then(res =>res.json())
        .then(data =>setAllBookings(data))
    },[])

    //DELETE
    const handleDeleteBooking = id =>{
    const procees =window.confirm('Are you sure, you want to delete?');
    if(procees){
        const url = `http://localhost:5000/myBookings/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert('Deleted Successfully');
                const remainingBookings = allBookings.filter(booking => booking?._id !== id) 
                setAllBookings(remainingBookings);
            }
        });
    }
}
    return (
        <div>
             <h2>All Bookings:{allBookings?.length}</h2>
             
             <Table striped bordered hover>
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Destination</th>
                </tr>
            </thead>
            {
                allBookings?.map(booking => 
                <tbody key={booking._id}>
                    <tr>
                    <td>{booking?.name}</td>
                    <td>{booking?.email}</td>
                    <td>{booking?.address}</td>
                    <td>{booking?.phone}</td>
                    <td>{booking?.destinatio}</td>
                    <td><Button onClick={()=> handleDeleteBooking(booking._id)}>Delete</Button></td>
                    
                    </tr>
                </tbody>)
            }
        </Table> 
             
         
        </div>
    );
};

export default AllBookings;


                    
                    