import React from 'react';
import Img from 'react-image'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const images = [
  "https://cdn.pixabay.com/photo/2013/04/11/19/46/louvre-102840_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/10/30/15/21/travel-2902737_1280.jpg",
]

const text = [
  "text 1",
  "text 2",
  "text 3",
]

const textStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  maxWidth: "250px",
  padding: "20px",
  borderRadius: "15px",
  marginLeft: "40px",
  position: 'relative',
  top: '80px',
}

const style = (index) => ({
  backgroundImage: `url(${images[index]})`,
  height: "500px"
})

class BigImageArea extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: 0,
    }
    this.setNextImage = this.setNextImage.bind(this);
  }
  setNextImage() {
    if(this.state.image == 2){
      this.setState({image: 0});
    } else {
      this.setState({image: this.state.image + 1});
    }
  }
  componentDidMount() {
    // this.interval = setInterval(this.setNextImage.bind(this), 3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div style={style(this.state.image)}>
        <div style={textStyle}>
          <div>Ваш гид в Париже</div>
          <div>Увлекательные пешие прогулки</div>
          <div>Индивидуальные составленные туры</div>
        </div>
      </div>
    )
  }
}

export default BigImageArea;
