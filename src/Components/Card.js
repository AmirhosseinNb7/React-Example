import React, { Component } from 'react';
import styles from './Card.module.css'
class Card extends Component {
    render() {
        const {image} =this.props;
        return (
            <div className={styles.container}>
              <img src={image}/>
            </div>
        );
    }
}

export default Card;