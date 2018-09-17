import React, {Component} from 'react';

class Life extends Component {

    state = {
        title:'Life cycles'
    }

    componentWillMount() {
        console.log('3 before render');
    }

    componentWillUpdate() {
        console.log('before update');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);

        if (nextState.title === 'something else') {
            return false;
        }

        return true;
    }
    
    componentWillReceiveProps() {
        console.log('Before receive props: ')
    }

    render() {
        console.log('RENDER');
        return (
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={() => this.setState({title: 'something else'})}>CLICK TO CHANGE</div>
            </div>
        )   
    }

    componentDidMount() {
        console.log('5 after render');
    }

    componentDidUpdate() {
        console.log('after update');
    }

}

export default Life;