import React from 'react'
import { ProfileIcon, MessageIcon, HeartIcon, CartIcon } from '../../assets/icons'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <div className="header-top">
                <div className="container">
                    <div className="header-row">
                        <div className="header-logo">
                            <Link to={'/'}>
                            <img src="/images/logo.svg" alt="site logo" />
                            </Link>
                        </div>

                        <form className="header-search">
                            <input type="text" placeholder='Search...' className='header-search__input' />
                            <button className="header-search__button">Search</button>
                        </form>

                        <div className="header-buttons">
                            <button className="header-button">
                                <span className='header-button__icon'>
                                    <ProfileIcon />
                                </span>
                                <span className="header-button__text">Profile</span>
                            </button>
                            <Link to='/orders'>
                                <button className="header-button">
                                    <span className='header-button__icon'>
                                        <HeartIcon />
                                    </span>
                                    <span className="header-button__text">Orders</span>
                                </button>
                            </Link>
                            <Link to='/cart'>
                                <button className="header-button">
                                    <span className="header-button__icon">
                                        <CartIcon />
                                    </span>
                                    <span className="header-button__text">My cart</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header