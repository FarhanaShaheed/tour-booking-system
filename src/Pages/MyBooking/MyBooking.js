import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Table, Button } from 'react-bootstrap';

const MyBooking = () => {
    const [myBookings, setMyBookings] = useState();
    console.log(myBookings);
    const {user} = useAuth();
    console.log(user);
    useEffect(()=>{
        fetch('https://safe-tundra-54858.herokuapp.com/myBookings')
        .then(res =>res.json())
        .then(data => {
            const result = data.filter(a => a.email === user.email)
            setMyBookings(result);
        })
            
    },[]);

    //DELETE
    const handleDeletemyBooking = id =>{
        const procees =window.confirm('Are you sure, you want to delete?');
        if(procees){
            const url = `https://safe-tundra-54858.herokuapp.com/myBookings/${id}`
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remainingBookings =myBookings.filter(booking => booking?._id !== id) 
                    setMyBookings(remainingBookings);
                }
            });
        }
    }

    return (
    <div>
    <h2>Here is Your Bookings</h2>
       <div className="table-responsive">
       <Table striped bordered hover>
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Destination</th>
            <th>Action</th>
            </tr>
        </thead>
        {
         
            myBookings?.map(bookings => 
            <tbody key={bookings._id}>
                <tr>
                <td>{bookings?.name}</td>
                <td>{bookings?.email}</td>
                <td>{bookings?.address}</td>
                <td>{bookings?.phone}</td>
                <td>{bookings?.destinatio}</td>
                <td><Button onClick={()=> handleDeletemyBooking(bookings._id)}>Cancel</Button></td>
                
                </tr>
            </tbody>
            )
        }
    </Table>
       </div>
    </div>
    
        
    );
};

export default MyBooking;