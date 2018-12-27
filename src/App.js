import React, { Component } from 'react';
import { Shellbar } from 'fundamental-react/dist/Shellbar/Shellbar';
import './App.scss';

class App extends Component {
    profile1 = {
        initials: 'JS',
        userName: 'John Snow',
        colorAccent: 8,
    };

    profileMenu = [
        { name: 'Settings', glyph: 'action-settings', size: 's', callback: () => alert('Settings selected!') },
        { name: 'Sign Out', glyph: 'log', size: 's', callback: () => alert('Sign Out selected!') },
    ];

    render() {
        return (
            <Shellbar
                logo={<img src='//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png' alt='SAP' />}
                productTitle='Corporate Portal'
                profile={this.profile1}
                profileMenu={this.profileMenu}
            />
        );
    }
}

export default App;
