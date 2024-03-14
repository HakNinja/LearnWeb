import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import courses from './courses.json'
import StarIcon from '@material-ui/icons/Star';
import './CoursesDetails.scss'

const CoursesDetails = () => {
    const { slug } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        setDetails(courses.courses[slug]);
        console.log(details)
    }, [details, slug])

    return (
        <div className='details-container'>
            <div className='details-left'>
                <img src={details.c_image} alt="" />
                <div className='left-desc'>
                    <div className='t-language'> Language: {details.language}</div>
                    <div className='t-ratings'> {details.rating} <StarIcon style={{ fill: "black", width: "17px" }} /> / 5 <StarIcon style={{ fill: "black", width: "17px" }} /> </div>
                </div>
            </div>
            <div className='details-right'>
                <h2>{details.course_name}</h2>
                <div className='t-name'> ~ {details.tutor_name} </div>
                <div className='t-desc'>
                    {details.detailed_description}
                </div>
                <div className='pricings'>
                    <div className='prices'> ₹{details.price} </div>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default CoursesDetails