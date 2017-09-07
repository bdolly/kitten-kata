import React, { Component } from 'react';
import './KittenKata.css';
import 'normalize.css';
import Post from './components/Post/Post.js';



class KittenKata extends Component {

  
  render() {


    const POST_CONTENT = "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>";
    const POST_CONTENT_LONG = "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>";


    return (
      <div className="module_wrapper">
        <Post
          imgSrc="http://via.placeholder.com/100x100"
          imgAtl="Square Image of Kitten"
          title="Title Sometimes Gets Truncated if It's super long"
          content={POST_CONTENT}
          contentMaxChars={189}
          link="https://www.thinkcompany.com/"
        />      


        <Post
          imgSrc="http://via.placeholder.com/100x100"
          imgAtl="Square Image of Kitten"
          content={POST_CONTENT}
          contentMaxChars={189}
          link="https://www.thinkcompany.com/"
        />

        <Post
          title="No Image Title Sometimes Gets Truncated"
          content={POST_CONTENT}
          contentMaxChars={200}
          link="https://www.thinkcompany.com/"
        />

        <Post
          imgSrc="http://via.placeholder.com/100x100"
          imgAtl="Square Image of Kitten"
          title="No Image Title Sometimes Gets Truncated"
          content={POST_CONTENT_LONG}
          contentMaxChars={150}
          link="https://www.thinkcompany.com/"
        />            

      
      </div>
    );


  }
}



export default KittenKata;
