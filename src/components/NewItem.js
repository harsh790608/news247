import React from 'react';
import newsmonkey from "./newsmonkey.png"


export default function NewsItem(props) {
  return (  
    <div className="card" >
    <img className="card-img-top" src={props.imgUrl ? props.imgUrl : newsmonkey } alt="cap"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <p className="card-text"><small className="text-muted">By {props.author ? props.author :"unknown"} on {new Date(props.date).toGMTString()}</small></p>
      <a href={props.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More...</a>
    </div>
   </div>
  )
}
