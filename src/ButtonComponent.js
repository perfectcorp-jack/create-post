import logo from './logo.svg';
import './App.css';
import React from 'react';

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  addPost = (post) => {
    const posts = this.props.posts;
    posts.push(post);
    console.log(posts);
    this.setState({
      posts: posts,
    });
  }

  removePost = () => {
    const posts = this.props.posts;
    posts.pop();
    console.log(posts);
    this.setState({
      posts: posts,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addPost([this.props.title, this.props.content, this.props.image]);
  }

  handleRemove(e) {
    e.preventDefault();                                     
    this.removePost();
  }

  render() {
    return (
      <div>
        <br />
        <input type='file' accept='image/*' onChange={this.props.handleImageChange} />
        <button style={{ width: '100px' }} onClick={this.handleSubmit}>submit</button>
        <button style={{ width: '100px' }} onClick={this.handleRemove}>remove</button>
      </div>
    )
  }
}

export default ButtonComponent;
