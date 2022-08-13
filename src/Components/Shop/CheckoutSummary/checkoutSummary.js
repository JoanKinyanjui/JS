import React,{useState,useEffect} from 'react';
import '../CheckoutSummary/CheckoutSummary.css';
import {Button} from  '@mui/material';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios';


function CheckoutSummary() {
    const { total } = useSelector((store) => store.cart);
    const taxPrice =total *0.14;
    const totalPrice =total + taxPrice;
    const roundedTotal = totalPrice.toFixed(0)

//HANDLING INPUT ...
const[phone,setPhone]= useState('0790236990');
const[amount,setAmount]= useState(`${roundedTotal}`);

const onHandlePayment=async(e)=>{
        e.preventDefault();
        postPayment();
        setPhone('');
        setAmount('');
  }


const postPayment =()=>{
        var bodyFormData = new FormData();
        bodyFormData.append('phone', {phone});
        bodyFormData.append('amount', {amount});
        console.log(amount,phone)
            
                axios({
                    method: "post",
                    url: "http://localhost:3000/stk",
                    data: bodyFormData,
                    headers: { "Content-Type": "multipart/form-data" },
                  })
                    .then(function (response) {
                      //handle success
                      console.log(response);
                    })
                    .catch(function (response) {
                      //handle error
                      console.log(response);
                    });
                  
        }



  return (
    <div className='CheckoutSummary'>
        <h4  style={{ fontSize:'18px',color:'sandybrown' , marginTop:'5rem',marginBottom:'2rem'}}>CHECKOUT SUMMARY</h4> 
        <Card className='CheckoutCard'>
      <Card.Body>
        <Card.Title>TOTAL : Ksh {totalPrice.toFixed(0)}</Card.Title>
        <Card.Text style={{fontFamily:'System' , fontSize:'12px'}}>
          PAY VIA MPESA <br /><br />
          <form onSubmit={onHandlePayment}>
            <input placeholder='07...' name='phone' type='tel'  value={phone}  onChange={(e)=>setPhone(e.target.value)}/>
            <br />
            <br/>
            <input readOnly   placeholder='amount...' type='number' name='integer' value={roundedTotal}  />
            <br /><br />
            <input  type='submit' className='checkoutButton' value='Confirm Payment'/>
                     </form>
        </Card.Text>
    
      </Card.Body>
    </Card>

    <Link to="/checkout"><button className='back'>Back</button></Link>
    </div>
  )
}

export default CheckoutSummary;