import React from 'react'
import themeData from './Courses/theme.json'
import { Link } from "react-router-dom"

const ThemeSelect = () => {
    return (
        <div className="App min-h-[90vh] relative mb-10">
            <h1 className='mt-10'>Select Theme</h1>
            <div className="recent_recipes_posts">
                <div className="products-container">
                    {themeData.theme.map((theme, index) => (
                        <Link to={theme.connector}> <article className="product-card" >
                            <img src={theme.timage} alt={theme.tname} width={300} height={300} className='product-image' />
                            <p className="product-name">{theme.tname}</p>
                        </article></Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ThemeSelect