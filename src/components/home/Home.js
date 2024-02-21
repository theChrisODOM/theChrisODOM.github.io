import * as React from 'react';
import Avatar from './Avatar';

class Home extends React.Component {

    render() {
        return (
            <div>
                <header className="App-header">
                    <Avatar />
                    <h2>CSODOM's Personal Portfolio. </h2>
                    <p> 
                        On this website, there will be information about CSODOM's projects and other work history.
                    </p>
                </header>
            </div>
        )
    }
}

export default Home;