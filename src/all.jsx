import React from 'react';
import Word from './components/word'


export default class All extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            words: [
                {
                    text: "HEY", 
                    color: '#fff',
                    bgColor: '#e63946'
                },
                {
                    text: "THERE", 
                    color: '#000',
                    bgColor: '#f1faee'
                },
                {
                    text: "HOW", 
                    color: '#000',
                    bgColor: '#a8dadc'
                },
                {
                    text: "ARE", 
                    color: '#fff',
                    bgColor: '#457b9d'
                },
                {
                    text: "YOU", 
                    color: '#fff',
                    bgColor: '#1d3557'
                }
            ],
            pos: {
                x: 0,
                y: 0
            }
        }

        this.handleMouseWheel = this.handleMouseWheel.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0,0)
        const container = document.getElementById('container')
        container.addEventListener('wheel', this.handleMouseWheel, { passive: false })
    }

    handleMouseWheel(e){
        e.preventDefault(); 
        e.stopPropagation(); 
        // console.log('x', window.pageXOffset, 'y', window.pageYOffset)
        let { pos } = this.state;

        if (e.deltaY > 0) pos.x += 10;
        else pos.x -= 10;

        pos.y = window.pageYOffset

        this.setState({ pos: pos })
        
        window.scrollTo(pos.x, pos.y)
    }

    render(){

        const { words } = this.state;

        return (
            <div 
                id="container"
                style={{ touchAction: 'none', overflowY: 'hidden', minHeight: '100vh', display: 'flex', width: `${words.length*100}vw` }}
                
            >
                {words.map(word => <Word text={word.text} color={word.color} bgColor={word.bgColor}  />)}
            </div>
        )
    }
}