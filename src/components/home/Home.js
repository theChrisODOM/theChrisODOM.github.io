import * as React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={"/profile.png"} className="App-logo" alt="my face" />
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