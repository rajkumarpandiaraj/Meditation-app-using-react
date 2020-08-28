import React, { Component } from 'react'

const grow = {
    animation: "grow 3s linear forwards"
}

const shrink = {
    animation: "shrink 3s linear forwards"
}

export class Meditation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            text : '',
            isGrowing : false
        }
    }

    componentDidMount = ()=>{
        this.breathAnimation();
        setInterval(this.breathAnimation, 7500);
    }
    
    breathAnimation = () => {
        this.setState({
            text : 'Breathe In',
            isGrowing : true
        })
    
        setTimeout(() =>{
            this.setState({
                text : 'Hold'
            })
    
            setTimeout(() => {
                this.setState({
                    text : 'Breathe Out',
                    isGrowing : false
                })
            },1500);
        },3000);
    
    }
    render() {
        return (
            <div>
                <div className="container" style={this.state.isGrowing? grow : shrink }>
                    <div className="gradient-circle">
                        <div className="circle">
                        <p id="text">{this.state.text}</p>
                        </div>
                    </div>
                    <div className="pointer-container">
                        <div className="pointer"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Meditation

