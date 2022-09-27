import logo from './logo.svg';
import './App.css';
import React from 'react';
import ButtonComponent from './ButtonComponent';

class AddPostComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: 'Please input Content.',
      image: '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
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

  render() {
    return (
      <div>
        <form>
          <div style={{ padding: '10px 0px' }}>Title:</div>
          <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
          <div style={{ padding: '10px 0px' }}>Content:</div>
          <textarea cols="50" rows="5" value={this.state.content} onChange={this.handleContentChange}></textarea>
          <ButtonComponent
            title={this.state.title}
            content={this.state.content}
            image={this.state.image}
            posts={this.props.posts}
            handleTitleChange={this.handleTitleChange}
            handleContentChange={this.handleContentChange}
            handleImageChange={this.handleImageChange}
            handleSubmit={this.props.handleSubmit}
          />
        </form>
        <br />
        <hr />
      </div>
    )
  }
}

export default AddPostComponent;
