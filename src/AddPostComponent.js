import logo from './logo.svg';
import './App.css';
import React from 'react';
import ButtonComponent from './ButtonComponent';

class AddPostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.fileInput = React.createRef();
  }

  handleTitleChange(e) {
    this.props.handleTitleChange(e.target.value);
  }

  handleContentChange(e) {
    this.props.handleContentChange(e.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <div style={{ padding: '10px 0px' }}>Title:</div>
          <input type="text" value={this.props.title} onChange={this.handleTitleChange}  />
          <div style={{ padding: '10px 0px' }}>Content:</div>
          <textarea cols="50" rows="5" value={this.props.content} onChange={this.handleContentChange}></textarea>
          <ButtonComponent 
            title={this.props.title}
            content={this.props.content}
            image={this.props.image}
            posts={this.props.posts}
            handleTitleChange={this.handleTitleChange}
            handleContentChange={this.handleContentChange}
            fileInput={this.props.fileInput}
          />
        </form>
        <br />
        <hr />
      </div>
    )
  }
}

export default AddPostComponent;
