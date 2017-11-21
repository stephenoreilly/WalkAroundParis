import React from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-image'

const style = {
  footer: {
    maxWidth: '100%',
    backgroundColor: "#181919",
    color: '#fff',
    fontSize: '16px',
    padding: "20px",
  },
  footerColumns: {
    paddingBottom: "20px",
    fontSize: '11px',
    fontWeight: 'bold',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  column: {
    minWidth: "200px",
    // borderRight: "1px white solid",
  }
}

const FooterColumn = ({children}) => (
  <div style={style.column}>
    {children}
  </div>
)
const Footer = () => (
  <div style={style.footer}>
    <div style={style.footerColumns}>
      <div>
        <Img width={120} src={require("./logo_inverted.png")} />
      </div>
      <div>
        <FooterColumn >
          <p>
            <Link to="/walking_tours" style={{textDecoration: "none", color: "#fff"}}>
              ЭКСКУРСИИ
            </Link>
          </p>
          <p>
            <Link to="/tour/1" style={{textDecoration: "none", color: "#fff"}}>
              Обзорная экскурсия
            </Link>
          </p>
          <p>
            <Link to="/tour/2" style={{textDecoration: "none", color: "#fff"}}>
              Дух средневековья
            </Link>
          </p>
        </FooterColumn>
        <FooterColumn >
          <p>
            <Link to="/tour/3" style={{textDecoration: "none", color: "#fff"}}>
              шопинг тур
            </Link>
          </p>
          <p>
            <Link to="/tour/4" style={{textDecoration: "none", color: "#fff"}}>
              Tуры на заказ
            </Link>
          </p>
          <p>
            <Link to="/tour/5" style={{textDecoration: "none", color: "#fff"}}>
              Готический Дижон
            </Link>
          </p>
        </FooterColumn>
      </div>
      <FooterColumn >
        <p>
          <Link to="/about_us" style={{textDecoration: "none", color: "#fff"}}>
            О НАС
          </Link>
        </p>
      </FooterColumn>
      <FooterColumn >
        <p>
          <Link to="/gallery" style={{textDecoration: "none", color: "#fff"}}>
            ФОТО
          </Link>
        </p>
      </FooterColumn>
      <FooterColumn >
        <p>
          <Link to="/contact" style={{textDecoration: "none", color: "#fff"}}>
            КОНТАКТ
          </Link>
        </p>
      </FooterColumn>
    </div>
    <div>
      Copyright @2017 Walk In Paris - All Rights Reserved
    </div>
  </div>
)

export default Footer;