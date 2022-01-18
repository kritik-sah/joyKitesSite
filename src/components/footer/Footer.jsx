import React from 'react'

const Footer = () => {
    return (
        <footer className='py-4 position-relative bg-light text-dark'>
            <a className='position-absolute btn btn-success rounded-circle p-0 m-0' style={{top:"-30px", right:"10px"}} href="#mint">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                </svg>
            </a>
            <p className='text-center'>
                &copy; 2021 Joy Kites by <a href="https://servicesstrategy.com" target="_blank" rel="noopener noreferrer">IT Rebels</a> .
            </p>
        </footer>
    )
}

export default Footer
