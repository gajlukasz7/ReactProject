import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

//COMPONENTS
import Header from './Components/header';
import NewsList from './Components/news_list';

class App extends Component {

    state = {
        news: JSON,
        filtered: []
    }

    getKeyword = (event) => {
        const keyword = event.target.value;
        const  filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keyword) > -1
        })
        this.setState({
            filtered
        })
    }

    render(){
        const newsFiltered = this.state.filtered;
        const newsWhole = this.state.news;
        return (
            <div>
                <Header keywords={this.getKeyword}/>
                <NewsList news={newsFiltered.length === 0 ? newsWhole : newsFiltered }>
                    <h3>The news are:</h3>
                </NewsList>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));