import React from 'react';
import Card from '../Card/Card';
import ReactLoading from 'react-loading';
import './Ideas.css';

const Ideas = ({ ideas, isLoading, deleteIdea }) => {
  const cards = ideas.map(idea => <Card key={idea.result} id={idea.id} genre={idea.genre} theme={idea.theme} result={idea.result} deleteIdea={deleteIdea} />)

  return (
    <section className='ideas-wrapper'>
      <h2>Results</h2>
      {isLoading && <ReactLoading type='cylon' color='#000' />}
      {cards.length ? cards : <p>No ideas to display...yet!</p>}
    </section>
  )
}

export default Ideas;