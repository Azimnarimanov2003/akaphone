import React from 'react'
import Header from './Header/Header';
import Body from './Body/Body';
import Card from './Card/Card';
import Section from './Section/Section';

function Layout() {
    return (
        <div>
            <Header />
            <Body />
            <Card />
            <Section/>
        </div>
    )
}

export default Layout
