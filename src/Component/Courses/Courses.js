import React, { useState } from 'react';
import reactimg from '../../images/react.jpg'

import './Courses.css'


const Courses = (props) => {

   // const courses=[{cname:'React Crash Course',cprice:5.99,ccategory:'Web Development'},{cname:'Nodejs Crash Course',cprice:3.99,ccategory:'Web Development'},{cname:'React Native Crash Course',cprice:7.99,ccategory:'Web Development'}]
    //const [cart, setCart] = useState(0);

    const {cname,cprice,ccategory,cimg}=props.course;
    console.log(props);

    return (
        <div className='course'>

            <div className='style' >
                <img src={cimg} alt="" />
                <h3>{cname}</h3>
                <p><small> Category: {ccategory}</small></p>
                <p> Price: ${cprice}</p>
                <button onClick={() =>{props.handleAddProduct(props.course)} }> Enroll Now</button>
            </div>

        </div>
    );
};

export default Courses;