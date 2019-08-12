import React from 'react';

class CreatedUrl extends React.Component {

  render() {
    return (
      <div class="alert alert-success" role="alert">
        <p>URL {this.props.url} shortened to {this.props.shortUrl}</p>
      </div>
    );
  }
}

export default CreatedUrl
