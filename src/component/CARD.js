import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MovieRating from './Rating'


const CARD = ({movie}) => {
  return (
    <div>
      <Card style={{ width: '18rem',  border:"1px solid ", borderRadius:'5px', maxHeight:"400px" }}>
      <Card.Img variant="top" src={movie.posterUrl} style={{maxWidth:'150px'}}/>
      <Card.Body>
      <Card.Text>{movie.id}</Card.Text>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <MovieRating MovieRating={movie.rate} isMovieRating={true}/>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CARD
