import React from 'react';

class InvalidUrl extends React.Component {

  render() {
    return (
      <div class="alert alert-danger" role="alert">
        Invalid url to shorten!
      </div>
    );
  }
}

export default InvalidUrl
