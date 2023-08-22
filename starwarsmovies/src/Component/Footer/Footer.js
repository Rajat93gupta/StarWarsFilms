import React from 'react'
import style from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={`${style.footer1}`}>
            <div className={`${style.footer}`}> 
                <p className='text-center'>CopyRight @2023</p>
            </div>
        </div>
    )
}

export default Footer
