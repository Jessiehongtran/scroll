import React from 'react';

export default class Word extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        const { text, bgColor, color } = this.props;

        return (
            <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', color: `${color}`, backgroundColor: `${bgColor}`, fontSize: '60px' }}>
                {text}
            </div>
        )
    }
}