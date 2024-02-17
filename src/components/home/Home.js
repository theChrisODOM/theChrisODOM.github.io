import * as React from 'react';
import Button from '@mui/material/Button';
import logo from '../../logo.svg';

class Home extends React.Component {

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>This Website is CSODOM's Personal Portfolio. </h1>
                    <h4> 
                        On this website, there will be information about CSODOM's projects and other work history.
                    </h4>
                    <Button variant="contained">Do Nothing Button</Button>
                </header>
            </div>
        )
    }
}

export default Home;