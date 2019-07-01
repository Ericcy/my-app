import React from 'react';
import logo from './logo.jpg'
import './logo.css'
class Logo extends React.Component{
    render(){
        return <div className="logo">
            <img src={logo}/>
        </div>
    }
}

export default Logo