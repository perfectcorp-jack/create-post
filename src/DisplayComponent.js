import './App.css';
import React from 'react';

class DisplayComponent extends React.Component {

  render() {
    const posts = this.props.posts;
    const listItems = posts.map((post, index) => {
      return (
        <div key={index} style={{ border: '3px #000 dashed', margin: '10px auto', width: '50%' }}>
          <div>
            {post.title}
          </div>
          <div>
            {post.content}
          </div>
          <div>
            {post.image !== '' ? <img src={post.image} alt="image" style={{ width: '100px' }} /> : null}
          </div>
        </div>
      )
    });

    return (
      <div style={{ textAlign: 'center' }}>
        <br />
        {posts.length > 0 ?
          <div>
            {listItems}
          </div>
          : null}
      </div>
    )
  }

}

export default DisplayComponent;
