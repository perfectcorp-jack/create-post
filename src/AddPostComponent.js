import './App.css';
import React, { useRef } from 'react';

class AddPostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      title: '',
      content: 'Please input Content.',
      image: '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleContentChange(e) {
    this.setState({
      content: e.target.value,
    });
  }

  handleImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
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
    this.props.addPost({
      title: this.state.title,
      content: this.state.content,
      image: this.state.image,
    });
    this.setState({
      title: '',
      content: 'Please input Content.',
      image: '',
    });
    this.myRef.current.value = null;
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.removePost();
  }

  render() {
    return (
      <div>
        <form>
          <div style={{ padding: '10px 0px' }}>Title:</div>
          <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
          <div style={{ padding: '10px 0px' }}>Content:</div>
          <textarea cols="50" rows="5" value={this.state.content} onChange={this.handleContentChange}></textarea>
          {this.state.image != '' ? <div style={{ padding: '10px 0px' }}>Image Preview:</div> : null}
          {this.state.image != '' ? <img src={this.state.image} alt="image" style={{ width: '100px' }} /> : null}
          <br />
          <br />
          <input type='file' accept='image/*' onChange={this.handleImageChange} ref={this.myRef} />
          <button style={{ width: '100px' }} onClick={this.handleSubmit}>submit</button>
          <button style={{ width: '100px' }} onClick={this.handleRemove}>remove</button>
        </form>
        <br />
        <hr />
      </div>
    )
  }
}

export default AddPostComponent;
