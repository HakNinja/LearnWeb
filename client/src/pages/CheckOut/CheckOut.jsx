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
            <div class="relative overflow-x-auto">
    <table class="w-full text-l text-left rtl:text-right text-black-500 dark:text-gray-400">
        <thead class=" text-white text-lg uppercase bg-pink-600">
            <tr>
                <th scope="col" class="px-6 py-3 rounded-s-lg">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Instructor
                </th>
                <th scope="col" class="px-6 py-3 rounded-e-lg">
                    Price
                </th>
            </tr>
        </thead>
        <tbody className='rounded'>
            <tr class="bg-pink-100 text-gray-900 rounded-lg ">
                <th scope="row" class="px-6 py-4 font-medium rounded-s-lg text-gray-900 whitespace-nowrap">
                    <img src={details.c_image} alt="" style={{width:"200px", borderRadius:"15px"}} />
                    <div className='text-l text-gray-900 font-bold mt-4'>{details.course_name}</div>
                </th>
                <td class="px-6 py-4 text-l text-gray-900 font-bold">
                    {details.tutor_name}
                </td>
                <td class="px-6 py-4 text-l text-gray-900 font-bold">
                ₹ {details.price}
                </td>
            </tr>
            
        </tbody>
    </table>
</div>
                <div className='discount'>
                   <div className='dis-text'> Got Your Coupons? Apply Here</div>
                   <div><input type="text" placeholder='Coupon Code' className='input-field1' /> <button className='p-button1'>Apply</button></div>
                </div>
            </div>
            <div className='c-right'>
                right
            </div>
        </div>
    )
}

export default CheckOut