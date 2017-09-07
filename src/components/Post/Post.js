import React,{Component } from 'react';
import PropTypes from 'prop-types'; // ES6 

import './Post.css';


class Post extends Component {
  
  /**
   * Truncates our raw content and appends elipsiss and more link 
   */
  _truncateText(rawContent: string, link: string, maxChars: number = 189): string{
  	return rawContent.length > maxChars ? rawContent.substring(0, maxChars)+'... <a href="'+link+'" class="Post__content_more text-upper">more</a>' :  rawContent;
  }

  render() {

  	const {imgSrc, imgAlt, title, content, contentMaxChars, link } = this.props;
  	


    return (
      <div className="Post">

      	{
      		imgSrc 
      		?
      		
      		<a className="Post__img_link" href={link} >
      			<img className="Post__img" src={imgSrc} alt={imgAlt}/>
      		</a>
      		
      		:
      		null
      	}


      	<div className="Post__content_wrap">
      		{
      			title 
      			?
      			<a className="Post__title_link text-link text-collapsed" href={link}>
      				<h3 className="Post__title text-truncated text-collapsed">{title}</h3>
      			</a>
      			:
      			null
      		}

      		<div 
      			className="Post__content" 
      			dangerouslySetInnerHTML={{__html:this._truncateText(content, link, contentMaxChars)}}
      		>
      			
      		</div>
      	</div>
      </div>
    );
  }
}



Post.propTypes = {
	 title: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    content: PropTypes.string,
    contentMaxChars: PropTypes.number,
    link: PropTypes.string

};


export default Post;