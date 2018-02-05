import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render() {
        return(
            <div className="jumbotron">
                <h1>ProLytics Sports Feed</h1>
                <p>Are you a Sports freak ? You are at the right place</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

export default HomePage;