import React, {Component} from 'react';
import MyNewsCard from './MyNewsCard';

class NewsAPI extends Component {
    render() {
        return (
            <MyNewsCard articles={this.state.articles} />
        )
    }

    state = {
        articles: []
    };

    componentDidMount() {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://evilinsult.com/generate_insult.php?lang=en&type=json'
fetch(proxyUrl + targetUrl)
  .then(blob => blob.json())
  .then(data => {
    //this.setState({ articles: data })

    //console.table(data);
    var keys = Object.values(data)
    var key_to_use = keys[2];
    //console.log(key_to_use);
   // var b= JSON.stringify(data, null, 2);
    this.setState({ articles: key_to_use})
 //org    this.setState({ articles: JSON.stringify(data, null, 2) })
    //document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
   // return data;
  })
        //fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
            //
            //.then(res => res.text())          // convert to plain text
           // .then(text => console.log('sttt' + text))  // then log it out
           // .then(res => res.json())
           // .then((data) => { this.setState({ articles: data })
           // })
            .catch(console.log)
    }
}

export default NewsAPI;


