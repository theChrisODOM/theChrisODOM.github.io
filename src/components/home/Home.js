import * as React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={"/profile.png"} className="App-logo" alt="my face" />
                    <h1>CSODOM's Personal Portfolio. </h1>
                    <h4> 
                        On this website, there will be information about CSODOM's projects and other work history.
                    </h4>
                </header>
            </div>
        )
    }
}

export default Home;