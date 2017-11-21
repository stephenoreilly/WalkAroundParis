import React from 'react';
import { Link } from 'react-router-dom';

const images = [
  "https://cdn.pixabay.com/photo/2013/04/11/19/46/louvre-102840_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/10/30/15/21/travel-2902737_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/10/30/15/21/travel-2902737_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/10/30/15/21/travel-2902737_1280.jpg",
]

const headers = [
  "Обзорная пешая экскурсия: от Галлии до Республики",
  "Дух средневековья: по старинным кварталам Парижа",
  "Индивидуальный шопинг тур в столице моды",
  "Индивидуальные туры на заказ",
  "Индивидуальные туры на заказ",
]

const paragraphs =[
  "Мы пройдем по следам галлов, римлян и франков, мушкетеров и революционе-ров... Всех тех кто создал Париж и Францию такими какими вы видим их сегодня. Мы увидим как под влиянием политических событий и культурных веяний сменялись архитектурные…",
  "Если Вы мечтаете погрузиться в таинственную, притягательную историю Французской столицы, узнать город лучше чем любой француз, прогулка по средневековым кварталам позволит Вам понять где берет начало Париж и его особенная атмосфера, окутанная…",
  "Изысканность и очарование французского стиля ни для кого не секрет. Однако, ориентироваться в море бутиков и витрин, которые не всегда расположены вблизи туристических маршрутов, а также попросить нужный размер или информацию о…  ",
  "Мы предварительно обсудим с Вами и составим индивидуальную программу согласно Вашим интересам и пожеланиям. Возможно также адаптировать наши уже          существующие туры. Мы поможем Вам создать Ваше неповторимое, совершенно уникальное путешествие в Париж! ",
  "Мы предварительно обсудим с Вами и составим индивидуальную программу согласно Вашим интересам и пожеланиям. Возможно также адаптировать наши уже          существующие туры. Мы поможем Вам создать Ваше неповторимое, совершенно уникальное путешествие в Париж! ",
]

const buttonTexts = [
  "35€ /чел > 4 часов ",
  "35€ /чел > 2 часов ",
  "от 35€ /чел / час ",
  "Hапишите нам!",
  "Hапишите нам!",
]

const buttonColors = [
  "rgba(254,105,105,0.87)",
  "#75B49E",
  "#E93653",
  "rgba(254,105,105,0.87)",
  "rgba(254,105,105,0.87)",
]

const style = (index = 0) => ({
  cardImage: {
    backgroundImage: `url(${images[index]})`,
    height: '200px',
  },
  card: {
    margin: "10px 0",
    fontFamily: "Avenir Next",
    width: '315px',
    textAlign: 'center',
  },
  header: {
    fontSize: '20px',
  },
  paragraph: {
    fontSize: '14px',
    textAlign: 'justify',
  },
  textArea: {
    height: '220px',
    display: 'block',
  },
  button: {
    fontSize: '20px',
    fontWeight: "bold",
    lineHeight: '60px',
    color: '#fff',
    height: '60px',
    backgroundColor: buttonColors[index],
  }
})

const TourCard = ({cardNumber}) => (
  <Link to={`/tour/${cardNumber}`} style={{ color: 'black', textDecoration: 'none' }}>
    <div style={style().card}>
      <div style={style(cardNumber).cardImage}>
      </div>
      <div style={style().textArea}>
        <h1 style={style().header}>
          {headers[cardNumber]}
        </h1>
        <p style={style().paragraph}>
          {paragraphs[cardNumber]}
        </p>
      </div>
      <div style={style(cardNumber).button}>
        {buttonTexts[cardNumber]}
      </div>
    </div>
  </Link>
)

export default TourCard;