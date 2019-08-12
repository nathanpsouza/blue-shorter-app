import React from 'react';
import axios from 'axios';
import InvalidUrl from './InvalidUrl';
import CreatedUrl from './CreatedUrl';

class ShortenForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: '', short_url: '', valid: true };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.validURL(this.state.url)) {
      const payload = {short_url: {url: this.state.url}};
      axios.post('https://blue-shorter.herokuapp.com/shorten', payload).then(response => {
        this.setState({valid: true, short_url: response.data.short_url});
        this.forceUpdate();
      });
    } else {
      this.setState({valid: false});
      this.forceUpdate();
    }
  }

  validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

  render() {
    return (
      <div class="jumbotron text-center">
        <form onSubmit={this.handleSubmit} noValidate>
          <div class="form-group">
            <div class="input-group mb-3">
              <input type="text" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.url} placeholder="URL TO SHORT" />
                <div class="input-group-append">
                  <input class="btn btn-outline-primary" type="submit" value="Shorten!" />
                </div>
            </div>
            
            { this.state.valid ? null : <InvalidUrl/>}
            { this.state.short_url != '' ? <CreatedUrl shortUrl={this.state.short_url} url={this.state.url}/> : null }
            
          </div>
        </form>
      </div>
    );
  }
}

export default ShortenForm
