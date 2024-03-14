import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import courses from '../../components/Courses/courses.json'

import './CheckOut.scss'

const CheckOut = () => {
    const { slug } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        setDetails(courses.courses[slug]);
        console.log(details)
    }, [details, slug])

    return (
        <div className='checkout'>
            <div className='c-left'>
                <h2>Checkout</h2>
                <table>
                    <thead>
                        <tr style={{display:"flex", justifyContent:"space-between"}}>
                            <th>Course Name</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{display:"flex", justifyContent:"space-between"}}>
                            <td>
                                {/* <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-start"}}> */}
                                    <img src={details.c_image} alt=""  style={{width:"200px", border:"2px solid blue"}}/>
                                    <p> {details.course_name} </p>
                                {/* </div> */}
                            </td>
                            <td>description</td>
                            <td>price</td>
                        </tr>
                    </tbody>
                </table>
                <div>Discount</div>
            </div>
            <div className='c-right'>
                right
            </div>
        </div>
    )
}

export default CheckOut