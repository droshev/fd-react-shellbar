import React, { Component } from 'react';
import { Shellbar } from 'fundamental-react/dist/Shellbar/Shellbar';
import { Menu, MenuList, MenuItem } from 'fundamental-react/dist/Menu/Menu';
import './App.scss';
var images = require.context('../assets', true);

class App extends Component {
    productMenu = [
        { name: 'Application A', callback: () => alert('Application A selected!') },
        { name: 'Application B', callback: () => alert('Application B selected!') },
        { name: 'Application C', callback: () => alert('Application C selected!') },
        { name: 'Application D', callback: () => alert('Application D selected!') },
    ];

    searchInput2 = {
        label: 'Search',
        glyph: 'search',
        placeholder: 'Enter a fruit',
        searchList: [
            { text: 'apple', callback: () => alert('apple') },
            { text: 'apricot', callback: () => alert('apricot') },
            { text: 'acai', callback: () => alert('acai') },
            { text: 'banana', callback: () => alert('banana') },
            { text: 'berry', callback: () => alert('berry') },
            { text: 'blueberry', callback: () => alert('blueberry') },
            { text: 'blackberry', callback: () => alert('blackberry') },
            { text: 'cranberry', callback: () => alert('cranberry') },
            { text: 'conkerberry', callback: () => alert('conkerberry') },
            { text: 'calabash', callback: () => alert('calabash') },
            { text: 'clementines', callback: () => alert('clementines') },
            { text: 'kiwi', callback: () => alert('kiwi') },
            { text: 'orange', callback: () => alert('orange') },
        ],
        onSearch: function(searchTerm) {
            alert(`Search fired for ${searchTerm}`);
        },
        callback: () => alert('Search selected!'),
    };

    actions = [
        {
            glyph: 'settings',
            label: 'Settings',
            notificationCount: 5,
            callback: () => alert('Settings selected!'),
            menu: (
                <Menu>
                    <MenuList>
                        <MenuItem url='/'>Option 1</MenuItem>
                        <MenuItem url='/'>Option 2</MenuItem>
                        <MenuItem url='/'>Option 3</MenuItem>
                    </MenuList>
                </Menu>
            ),
        },
    ];

    notifications2 = {
        notificationCount: 2,
        label: 'Notifications',
        notificationsBody: (
            <Menu>
                <MenuList>
                    <MenuItem url='/'>Notification 1</MenuItem>
                    <MenuItem url='/'>Notification 2</MenuItem>
                    <MenuItem url='/'>Notification 3</MenuItem>
                </MenuList>
            </Menu>
        ),
        noNotificationsBody: (
            <Menu>
                <MenuList>
                    <MenuItem>There are no notifications</MenuItem>
                </MenuList>
            </Menu>
        ),
        callback: () => alert('Notification selected!'),
    };

    profile = {
        initials: 'JS',
        userName: 'John Snow',
    };

    profileMenu = [
        { name: 'Settings', glyph: 'action-settings', size: 's', callback: () => alert('Settings selected!') },
        { name: 'Sign Out', glyph: 'log', size: 's', callback: () => alert('Sign Out selected!') },
    ];

    productSwitcherList = [
        {
            title: 'Fiori Home',
            image: images('./01.png'),
            glyph: 'home',
            callback: () => alert('Fiori Home selected!'),
        },
        {
            title: 'S/4 HANA Cloud',
            image: images('./02.png'),
            glyph: 'cloud',
            callback: () => alert('S/4 HANA Cloud selected!'),
        },
        {
            title: 'Analytics Cloud',
            image: images('./03.png'),
            glyph: 'business-objects-experience',
            callback: () => alert('Analytics Cloud selected!'),
        },
        { title: 'Ariba', image: images('./04.png'), glyph: 'activate', callback: () => alert('Ariba selected!') },
        {
            title: 'SuccessFactors',
            image: images('./05.png'),
            glyph: 'message-success',
            callback: () => alert('SuccessFactors selected!'),
        },
        {
            title: 'Commerce Cloud',
            image: images('./06.png'),
            glyph: 'retail-store',
            callback: () => alert('Commerce Cloud selected!'),
        },
        { title: 'Gigya', image: images('./07.png'), glyph: 'customer-view', callback: () => alert('Gigya selected!') },
        {
            title: 'Callidus Cloud',
            image: images('./08.png'),
            glyph: 'globe',
            callback: () => alert('Callidus Cloud selected!'),
        },
        {
            title: 'Fieldglass',
            image: images('./09.png'),
            glyph: 'work-history',
            callback: () => alert('Fieldglass selected!'),
        },
        { title: 'Concur', image: images('./10.png'), glyph: 'area-chart', callback: () => alert('Concur selected!') },
        {
            title: 'Cloud for Customer',
            image: images('./11.png'),
            glyph: 'customer-view',
            callback: () => alert('Cloud for Customer selected!'),
        },
        {
            title: 'Cloud Portal',
            image: images('./12.png'),
            glyph: 'customer',
            callback: () => alert('Cloud Portal selected!'),
        },
    ];

    productSwitcher = {
        label: 'Product Switcher',
    };

    render() {
        return (
            <Shellbar
                logoSAP
                productTitle='Corporate Portal'
                productMenu={this.productMenu}
                subtitle='Subtitle'
                copilot
                searchInput={this.searchInput2}
                actions={this.actions}
                notifications={this.notifications}
                profile={this.profile}
                profileMenu={this.profileMenu}
                productSwitcher={this.productSwitcher}
                productSwitcherList={this.productSwitcherList}
            />
        );
    }
}

export default App;
