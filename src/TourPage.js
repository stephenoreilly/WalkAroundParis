import React from 'react';
import Img from 'react-image';
import FlatButton from 'material-ui/FlatButton';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import './tabs.css'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import tourTexts from './TourTexts/tours'

const style = {
  mainArea: {
    maxWidth: '1200px',
    margin: '20px auto',
    fontFamily: "Avenir Next",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  galleryImageStyle: {
    height: '377px',
    width: '304px',
    margin: '20px',
    marginTop: '40px',
  },
  price: {
    backgroundColor: '#FA7A8B',
    height: '116px',
    width: '126px',
    borderRadius: '80px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  currentLink: {
    color: 'rgba(232,48,77,0.91)',
    textDecoration: 'none',
    minWidth: '180px',
    height: '30px',
    textAlign: 'center',
  },
  link: {
    color: '#070B0C',
    textDecoration: 'none',
    minWidth: '180px',
    height: '30px',
    textAlign: 'center',
  }
}

const SecondaryNavBar = ({tourNumber}) => (
  <div style={{display: 'flex', justifyContent: 'space-around', maxWidth: '80%', flexWrap: 'wrap', margin: '10px auto' }}>
    <Link to="/tour/1" style={tourNumber == 1 ? style.currentLink : style.link}>
      Обзорная экскурсия
    </Link>
    <Link to="/tour/2" style={tourNumber == 2 ? style.currentLink : style.link}>
      Дух средневековья
    </Link>
    <Link to="/tour/3" style={tourNumber == 3 ? style.currentLink : style.link}>
      шопинг тур
    </Link>
    <Link to="/tour/4" style={tourNumber == 4 ? style.currentLink : style.link}>
      Tуры на заказ
    </Link>
    <Link to="/tour/5" style={tourNumber == 5 ? style.currentLink : style.link}>
      Готический Дижон
    </Link>
  </div>
)
const TourPageMainArea = ({tourNumber}) => {
  const tourText = tourTexts(tourNumber);
  return(
    <div style={style.mainArea}>
      <Img style={style.galleryImageStyle} width={200} height={150} src={'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg'} />
      <div style={{maxWidth: "500px", margin: '20px'}}>
        <h3>
          {tourText.header}
        </h3>
        <Tabs>
          <TabList>
            <Tab>{tourText.tab1.label}</Tab>
            <Tab>{tourText.tab2.label}</Tab>
            <Tab>{tourText.tab3.label}</Tab>
          </TabList>
          <TabPanel>
            <div>
              <h4>{tourText.tab1.header1}</h4>
              <p>
                {tourText.tab1.p1}
              </p>
              <p>
                {tourText.tab1.p2}
              </p>
              <p>
                {tourText.tab1.p3}
              </p>
              <FlatButton
                style={{float: 'right', height: '69px', width: '161px'}}
                backgroundColor='#FA7A8B'
                label={tourText.tab1.button}
                labelStyle={{color: '#fff', fontWeight: 'bold', fontFamily: "Avenir Next"}}
                hoverColor='#FA7A8B'
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <p>
                {tourText.tab2.p1}
              </p>
              <p>
                {tourText.tab2.p2}
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Table selectable={false}>
                <TableBody displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn>{tourText.tab3.row1_col1}</TableRowColumn>
                    <TableRowColumn>{tourText.tab3.row1_col2}</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>{tourText.tab3.row2_col1}</TableRowColumn>
                    <TableRowColumn>{tourText.tab3.row2_col2}</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={{whiteSpace: 'none',}}>{tourText.tab3.row3_col1}</TableRowColumn>
                    <TableRowColumn>{tourText.tab3.row3_col2}</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>{tourText.tab3.row4_col1}</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'none',}}>{tourText.tab3.row4_col2}</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>{tourText.tab3.row5_col1}</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'none',}}>
                      <p>{tourText.tab3.row5_col2.p1}</p>
                      <p>{tourText.tab3.row5_col2.p2}</p>
                    </TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>{tourText.tab3.row6_col1}</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'none',}}>
                      {tourText.tab3.row6_col2}
                    </TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div style={style.price}>
        <div>
          <div>{tourText.price.p1}</div>
          <div >{tourText.price.p2}</div>
        </div>
      </div>
    </div>
  )
}
class TourPage extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  componentDidUpdate(){
    window.scrollTo(0, 0);
  }
  render(){
    return (
      <div>
        <SecondaryNavBar tourNumber={this.props.match.params.id}/>
        <TourPageMainArea tourNumber={this.props.match.params.id}/>
      </div>
    )
  }
}

export default TourPage;