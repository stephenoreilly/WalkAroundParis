import React from 'react';
import Img from 'react-image'

const style = {
  mainArea: {
    maxWidth: "1000px",
    margin: '0 auto',
    fontFamily: "Avenir Next",
  },
  smallerTextHeader: {
    fontSize: '20px',
    lineHeight: '27px',
  },
  largerTextHeader: {
    fontSize: '24px',
    lineHeight: '33px',
  },
  galleryImages: {
    padding: "0 10px",
    maxWidth: "1000px",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  galleryImageStyle: {
    margin: '2px',
    display: 'inline-block'
  },
  roundedImageStyle: {
    border: "1px black solid",
    borderRadius: "30px",
    verticalAlign: 'middle'
  },
  roundedImageTextStyle: {
    margin: '20px',
    verticalAlign: 'middle',
  }
}

const galleryImages = [
  'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg',
  'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg',
  'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg',
  'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg',
  'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg',
  'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg',
  'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg',
  'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg',
  'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg',
  'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg',
  'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg',
  'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg',
  'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg',
  'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg',
  'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg',
  'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg',
]

const createGalleryImage = (img) => (
  <GalleryImage img={img} />
)

const GalleryImage = ({img}) => (
  <Img style={style.galleryImageStyle} width={240} height={150} src={img} />
)

class GalleryPage extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return(
      <div style={style.mainArea}>
        <div>
        <h3 style={style.largerTextHeader}>
          Фото отчет с экскурсий и
          <span style={style.smallerTextHeader}> ОТЗЫВЫ УЧАСТНИКОВ НАШИХ ЭКСКУРСИОННЫХ ПРОГРАММ
          </span>
        </h3>
        </div>
        <div style={style.galleryImages}>
          {
            galleryImages.map(createGalleryImage)
          }
        </div>
        <div style={{margin: '20px'}}>
          <div style={{display: 'flex'}}>
            <Img style={style.roundedImageStyle} width={57} height={57} src={'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg'} />
            <div style={style.roundedImageTextStyle}>
              Большое спасибо за экскурсию по Парижу! Вы открыли для меня этот город!
            </div>
          </div>
          <div style={{display: 'flex'}}>
            <Img style={style.roundedImageStyle} width={57} height={57} src={'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAf3AAAAJDc2YTE2NmYzLTQ0ZjItNDMxNC05NmE3LTBmNGFlN2VjZDRjMw.jpg'} />
            <div style={style.roundedImageTextStyle}>
              Большое спасибо за экскурсию по Парижу! Вы открыли для меня этот город!
            </div>
          </div>
        </div>
      </div>)
  }
}

export default GalleryPage;