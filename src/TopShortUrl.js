import React from 'react';

class TopShortUrl extends React.Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
          <p>
            <strong>URL:</strong> 
            <a href={this.props.shortUrl.url} target="_blank">{this.props.shortUrl.url}</a>
          </p>
          <p><strong>Title:</strong> {this.props.shortUrl.title}</p>
          <p>
            <strong>Short URL:</strong> 
            <a href={this.props.shortUrl.short_url} target="_blank">{this.props.shortUrl.short_url}</a>
          </p>
          <p>
            <strong>Visits count:</strong> {this.props.shortUrl.visits_counter}
          </p>
        </div>
      </div>
    );
  }
}

export default TopShortUrl
