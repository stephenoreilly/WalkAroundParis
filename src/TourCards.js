import React from 'react';

import TourCard from './TourCard';

const style = {
  width: "80%",
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  margin: '0 auto',
}

class TourCards extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    return(<div style={style}>
      <TourCard cardNumber={0}/>
      <TourCard cardNumber={1}/>
      <TourCard cardNumber={2}/>
      <TourCard cardNumber={3}/>
      <TourCard cardNumber={4}/>
    </div>)
  }
}

export default TourCards;