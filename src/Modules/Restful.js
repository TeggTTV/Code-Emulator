import React from 'react';
import axios from 'axios';

class MyComponent extends React.Component {
  state = {
    data: null,
    error: null
  }

  componentDidMount() {
    axios.get('http://localhost:3000/my-api-endpoint')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { data, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!data) {
      return <div>Loading...</div>;
    } else {
      return <div>My data: {data}</div>;
    }
  }
}

export default MyComponent;