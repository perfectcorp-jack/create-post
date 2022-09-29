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

  addPost = (post) => {
    const posts = this.state.posts;
    posts.push(post);
    this.setState({
      posts: posts,
    });
    console.log(posts);
  }

  removePost = () => {
    const posts = this.state.posts;
    posts.pop();
    this.setState({
      posts: posts,
    });
    console.log(posts);
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <AddPostComponent
          posts={this.state.posts}
          addPost={this.addPost}
          removePost={this.removePost}
        />
        <DisplayComponent
          posts={this.state.posts}
        />
      </div>
    )
  }
}

export default App;
