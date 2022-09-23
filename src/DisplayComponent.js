import logo from './logo.svg';
import './App.css';
import React from 'react';

class DisplayComponent extends React.Component {  
  render() {
    const posts = this.props.posts;
    const listItems = posts.map((post, index) => {
      return (
        <div key={index} style={{ border: '3px #000 dashed', margin: '10px auto', width: '50%'}}>
          <div>{post[0]}</div>
          <div>{post[1]}</div>
          <div><img src={post[2]['files']} style={{width: '50px'}} /></div>
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
