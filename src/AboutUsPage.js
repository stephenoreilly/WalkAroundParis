import React from 'react';
import Form from './Form';
import Img from 'react-image'

const style = {
  mainArea: {
    maxWidth: '700px',
    margin: '20px auto',
    display: 'flex',
    justifyContent: 'center ',
  },

  imageStyle: {
    border: '1px black solid',
    borderRadius: '40px',
  }
}
class AboutUsPage extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return(
      <div>
        <div style={style.mainArea}>
          <div>
            <div style={{minWidth: '100px', height: "200px"}}>
              <div style={{marginTop: '20px'}}>
                <Img style={style.imageStyle} width={80} height={80} src={'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg'} />
              </div>
              <div>
                <Img style={style.imageStyle} width={80} height={80} src={'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg'} />
              </div>
            </div>
          </div>
          <div>
            <p>Мы - группа гидов-переводчиков с опытом организации индивидуальных и групповых экскурсий.</p>

            <p>Прожив во Франции много лет, мы хотели бы познакомить Ваc c тем Парижем который знают и любят местные жители. Tо есть не только поделиться подробной информацией об истории и достопримечательностях, но и рассказать о жизни современных парижан и жителей французской глубинки.
            </p>
            <p>
              Мы предлагаем Вам прогулки небольшими группами, чтобы сделать Bашу встречу с Парижем поистине особенной и незабываемой.
            </p>
          </div>
        </div>
      <Form />
      </div>
    )
  }
}

export default AboutUsPage;