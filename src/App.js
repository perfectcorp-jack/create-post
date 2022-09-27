import logo from './logo.svg';
import './App.css';
import React from 'react';
import AddPostComponent from './AddPostComponent';
import DisplayComponent from './DisplayComponent';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <AddPostComponent
          posts={this.state.posts}
          handleSubmit={this.handleSubmit}
        />
        <DisplayComponent
          posts={this.state.posts}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default App;
