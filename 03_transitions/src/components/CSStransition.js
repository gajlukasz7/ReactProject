import React, { Component } from 'react';

import '../css/App.css';

class Fade extends Component {

    state = {
        show: true,
    }
//WIP
    showDiv = () => {
        this.setState({
            show:!this.state.show ? true : false
        })
    }

    render(){
        return(
            <div>
                <div className="showDiv" onClick={this.showDiv}>
                    Show or hide
                </div>
            </div>
        )
    }
}


export default Fade;