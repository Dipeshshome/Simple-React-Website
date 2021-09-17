import React from 'react';

const Cart = (props) => {
    console.log(props);
    const cart=props.cart;
    let total=0;

    const formarNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    for(let i=0;i<cart.length;i++){
        const course=cart[i];
        total=total+course.cprice
    }
    return (
        <div>
            <h3>Enrolled Summary</h3>
            <p>Course Enrolled: {cart.length} </p>
            <p>Course Price: {total}</p>
            <p>Total Price: {formarNumber(total)}</p>
        </div>
    );
};

export default Cart;