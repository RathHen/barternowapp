import react from 'react';
import './styles.scss';


const Header = props => {
    return (
        <header className="header">
           <div className="headerContainer"> 
            <button>
                BarterNow
            </button>
            <div className="searchBar">
                Search
            </div>
            
                <nav className="navHeaderButtons">
                    <button >Sell</button>
                    <button >Trades</button>
                    <button >Profile</button>
                </nav>
            
            </div>
        </header>
    );
};

export default Header;