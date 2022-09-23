import logo from './logo.svg';
import './App.css';
import React from 'react';
import AddPostComponent from './AddPostComponent';
import ButtonComponent from './ButtonComponent';
import DisplayComponent from './DisplayComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: 'Please input Content.',
      image: '',
      posts: [],
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleTitleChange(title) {
    this.setState({
      title: title,
    });
  }

  handleContentChange(content) {
    this.setState({
      content: content,
    });
  }

  handleSubmit(posts) {
    this.setState({
      posts: posts,
    });
  }

  render() {
    return (
      <div style={{ textAlign:'center' }}>
        <AddPostComponent
          title={this.state.title}
          content={this.state.content}
          image={this.state.image}
          posts={this.state.posts}
          handleTitleChange={this.handleTitleChange}
          handleContentChange={this.handleContentChange}
          handleSubmit={this.handleSubmit}
          fileInput={this.fileInput}
        />
        <DisplayComponent 
          title={this.state.title}
          content={this.state.content}
          image={this.state.image}
          posts={this.state.posts}
          handleTitleChange={this.handleTitleChange}
          handleContentChange={this.handleContentChange}
          handleSubmit={this.handleSubmit}
          fileInput={this.fileInput}
        />
      </div>
    )
  }
}

export default App;
