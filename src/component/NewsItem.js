import React from 'react'

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props

  return (
    <div className="card m-3">
      <div className="title" style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
        <span className="badge rounded-pill bg-danger">{source}</span>
      </div>
      <img src={imgUrl ? imgUrl : 'https://media.shuru.co.in/input/1683637294081.jpg'} className="card-img-top" alt="..." style={{ height: "18rem" }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-body-secondary">By {author ? author : 'known'} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target='_blank' className="btn btn-primary" rel="noreferrer">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem
