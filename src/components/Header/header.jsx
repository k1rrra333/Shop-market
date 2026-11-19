import './header.css';
function Header() {

    return (
        <>
            <header className='header'>
                <h1 className='logo'>Shop Market</h1>
                <nav className='nav-container'>
                    <div className='search-container'>
                        <input type="text" placeholder='Search' className='search-input' />
                        <button className='search-button'>Search</button>
                    </div>
                    <ul className='nav-links'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                </nav>
            </header>
        </>
    )
}

export default Header