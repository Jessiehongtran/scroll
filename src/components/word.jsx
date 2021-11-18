import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

export default class Word extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        const { text, bgColor, color } = this.props;

        return (
            <div>
                <div style={{ width: '100vw', height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: `${color}`, backgroundColor: `${bgColor}`, fontSize: '60px' }}>
                    <p>{text}</p>
                </div>
                <div style={{ height: '10vh', color: `${color}`, backgroundColor: `${bgColor}` }}>
                        <FontAwesomeIcon icon={faChevronCircleDown} style={{ fontSize: '30px', marginTop: '-50px' }}/>
                    </div>
            </div>
        )
    }
}