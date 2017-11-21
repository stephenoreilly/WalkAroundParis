import React from 'react';
import {withRouter} from 'react-router-dom';
import BigImageArea from './BigImageArea';
import BigTextArea from './BigTextArea';
import TourCards from './TourCards';

class HomePage extends React.Component{
  componentDidMount() {
    if(this.props.location.pathname == "/scroll"){
      console.log('test1')
      window.scrollTo(0, 200);
    }
  }
  render() {
    return(
      <div>
        <BigImageArea />
        <BigTextArea />
        <TourCards />
      </div>
    )
  }
}

export default withRouter(HomePage);