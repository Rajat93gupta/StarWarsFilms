import React from 'react'
import style from "./Header.module.css"
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className={`${style.Header}`}>
            <div className={`${style.Title}`}>
                <Link to="/"><h1> Star wars films</h1></Link>
            </div>
            


        </div>
    )
}

export default Header
