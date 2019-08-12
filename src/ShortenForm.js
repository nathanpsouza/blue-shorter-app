import React from 'react';
import axios from 'axios';

class ShortenForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: '', short_url: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const payload = {short_url: {url: this.state.url}};
    axios.post('https://blue-shorter.herokuapp.com/shorten', payload).then(response => {
      alert(response.data.short_url);
      this.setState({url: ''});
    });
  }

  render() {
    return (
      <div class="jumbotron text-center">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
          <div class="input-group mb-3">
          <input type="text" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.url} placeholder="URL TO SHORT" />
            <div class="input-group-append">
              <input class="btn btn-outline-primary" type="submit" value="Shorten!" />
            </div>
          </div>
            
            
          </div>
        </form>
      </div>
    );
  }
}

export default ShortenForm
