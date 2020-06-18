import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component{

    state = {
        advice : '',
        imageURL : ''
    };

    componentDidMount(){
        this.fetchAdvice();
        this.fetchImg();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                //console.log(advice);
                this.setState({
                    advice : advice 
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    fetchImg = () => {
        axios.get('https://source.unsplash.com/1600x900/?best-friends,girl-friends,' + Math.random())
            .then((response) => {
                //console.log(response.config.url);
                this.setState({ imageURL : response.config.url });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render(){
        
        const { advice, imageURL } = this.state;
        var imgUrl =  imageURL ;
        //console.log("image",imgUrl);
        var divStyle = {
            backgroundImage: 'url(' + imgUrl + ')'
        }
        
        return(
            
            <div className="app" style={divStyle}>
                <div className="card">
                    <div className="heading"><h1>{ advice }</h1></div>
                    <button className="button" onClick={() => {
                        this.fetchAdvice();
                        this.fetchImg();
                      }}>
                        <span>Next!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;