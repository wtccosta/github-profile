import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="welcome-message">
                <h1>Desafio Github API</h1>
                <p>Bootcamp Spring React - DevSuperior</p>
            </div>
            <div className="button-place">
                <Link to="/gitsearch">
                <button className="btn btn-primary btn-lg start-button">Começar</button>
            </Link>
            </div>
            
        </div>
    );
}

export default Home;
