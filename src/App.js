import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Img from 'react-image'
import Navbar from './Navbar';
import Footer from './Footer';
import AboutUsPage from './AboutUsPage';
import GalleryPage from './GalleryPage';
import ContactPage from './ContactPage';
import HomePage from './HomePage';
import TourPage from './TourPage';
import TourCards from './TourCards';
import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    textColor: 'rgb(0,0,0)',

  },
  appBar: {
    textColor: 'rgb(0,0,0)',
    backgroundColor: 'white',
  },
});


const App = () => (
  <BrowserRouter>
    <MuiThemeProvider muiTheme={muiTheme}>
        <Navbar />
        <main id='page-wrap'>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/walking_tours" component={TourCards} />
          <Route exact path="/about_us" component={AboutUsPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/gallery" component={GalleryPage} />
          <Route exact path="/tour/:id" component={TourPage} />
        </main>
        <Footer />
    </MuiThemeProvider>
  </BrowserRouter>
)
export default App;
