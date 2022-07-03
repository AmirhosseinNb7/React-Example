import React, { Component } from 'react';
import styles from './Cards.module.css';
import Card from './Card';
import one from '../images/3.jpg'
class Cards extends Component {
    render() {
        return (
            <div>
                <Card image={one}/>
            </div>
        );
    }
}

export default Cards;