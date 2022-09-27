import logo from './logo.svg';
import './App.css';
import React from 'react';

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
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

  handleTitleChange(e) {
    this.props.handleTitleChange(e.target.value);
  }

  handleContentChange(e) {
    this.props.handleContentChange(e.target.value);
  }

  handleImageChange(e) {
    // const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      // preview.src = reader.result;
      this.setState({
        image: reader.result,
      });
      console.log(reader.result);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addPost([this.props.title, this.props.content, this.state.image]);
  }

  handleRemove(e) {
    e.preventDefault();
    this.removePost();
  }

  render() {
    return (
      <div>
        <br />
        <input type='file' accept='image/*' onChange={this.handleImageChange} />
        <button style={{ width: '100px' }} onClick={this.handleSubmit}>submit</button>
        <button style={{ width: '100px' }} onClick={this.handleRemove}>remove</button>
      </div>
    )
  }
}

export default ButtonComponent;
