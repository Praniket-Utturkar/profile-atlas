import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <section id="footer">
            <p className='d-flex justify-content-center align-items-center'>
                <Link to="/" style={{ textDecoration: "none", color: "#054169" }}>
                    © ProfileAtlas 2024. Developed by Praniket Utturkar
                </Link>
            </p>
        </section>
    )
}
