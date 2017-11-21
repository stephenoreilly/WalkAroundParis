import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import { withRouter } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Img from 'react-image'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const style={
  outterWrapper:{
    fontFamily: "Oriya MN",
    minHeight: '60px',
    borderBottom: '1px solid #ccc',
    maxWidth: '100%',
  },
  innerWrapper:{
    maxWidth: '80%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  flexContainer:{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  logoText:{
    fontSize: '30px'
  },
}

const Navbar = ({history}) => {
  this.handleChange = (event, index, value) => {
    history.push(value)
  }
  return(
    <div style={style.outterWrapper}>
      <div style={style.innerWrapper}>
        <div style={style.flexContainer}>
          <Link to="/"><Img height={60} src={require("./logo.png")} /></Link>
          <div style={style.logoText}>{'Walk Around Paris'}</div>
        </div>
        <div style={style.flexContainer}>
          <div>
            <Link to="/about_us"><FlatButton label="О НАС" /></Link>
          </div>
          <div>
            <DropDownMenu value={'/walking_tours'} onChange={this.handleChange}>
              <MenuItem value={'/walking_tours'} primaryText="ЭКСКУРСИИ" />
              <MenuItem value={'/tour/1'} primaryText="Обзорная пешая экскурсия" />
              <MenuItem value={'/tour/2'} primaryText="Дух средневековья" />
              <MenuItem value={'/tour/3'} primaryText="Индивидуальный шопинг тур" />
              <MenuItem value={'/tour/4'} primaryText="Индивидуальные туры на заказ" />
              <MenuItem value={'/tour/5'} primaryText="Готический Дижон" />
            </DropDownMenu>
          </div>
          <div>
            <Link to="/gallery"><FlatButton label="ОТЗЫВЫ" /></Link>
          </div>
          <div>
            <Link to="/contact"><FlatButton label="КОНТАКТ" /></Link>
          </div>
        </div>
      </div>
    </div>)
};

export default withRouter(Navbar);