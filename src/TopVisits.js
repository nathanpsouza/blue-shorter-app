import React from 'react';
import axios from 'axios';
import TopShortUrl from './TopShortUrl';

class TopVisits extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_API_ADDRESS);
    console.log(process.env.NODE_ENV)
    axios.get(`${process.env.REACT_APP_API_ADDRESS}/urls/top_visits`).then(response => {
      this.setState({urls: response.data});
    });
  }

  render() {
    const listItems = this.state.urls.map((url) =>
      <TopShortUrl shortUrl={url}/>
    );

    return (
      <div>
        <h1>Top visited urls</h1>
        {listItems}
      </div>
    );
  }
}

export default TopVisits
