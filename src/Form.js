import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const style = {
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    margin: '0 auto',
    width: '320px',
    padding: '10px',
    backgroundColor: '#FA7A8B',
    height: '70px',
    color: '#fff',
    textAlign: 'center',
    lineHeight: '35px',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  formBody: {
    marginTop: '10px',
    textAlign: 'center',
    width: "100%",
    backgroundColor: '#FCFBFB',
    fontFamily: "Avenir Next",
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#FA7A8B',
  },
  inlineElements: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px',
    justifyContent: 'space-between',
  },
}

const icons = {
  'telephone': require('./Icons/phone.png'),
  'whatsApp': require('./Icons/whatsApp.png'),
  'email': require('./Icons/email.png'),
}

const iconTextContent = {
  'telephone': '+33 645156225',
  'whatsApp': '+33 645156225',
  'email': 'rozhkova.dina@gmail.com',
}

const iconTextHeaders = {
  'telephone': 'Tелефон',
  'whatsApp': 'WhatsApp',
  'email': 'Email',
}

const iconStyle = {
  iconElement:{
    height: '100px',
    width: '220px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  iconImage: {
    float: 'left',
    width: '40px',
    verticalAlign: 'middle'
  },
  iconTextArea: {
    fontSize: '16px',
    width: '160px',
    textAlign: 'left'
  }
}

const IconElement = ({type}) => {
  const fomatEmail = () => {
    if(type == 'email') {
      return (<a href="mailto:rozhkova.dina@gmail.com">
        {iconTextContent[type]}
      </a>)
    }

    return iconTextContent[type];
  }
  return(
    <div style={iconStyle.iconElement}>
      <div>
        <img style={iconStyle.iconImage} width="45px" src={icons[type]} />
      </div>

      <div style={iconStyle.iconTextArea}>
        <div>
          {iconTextHeaders[type]}
        </div>
        <div>
          {fomatEmail()}
        </div>
      </div>
    </div>
  )
}

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: false,
    },
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState({
      clicked: true,
    });
    console.log('send email');
  };
  render(){
    return(
      <div style={style.form}>
        <div style={style.header}>
          Мы будем рады ответить на все Bаши вопросы! Hапишите нам
        </div>
        <div style={style.formBody}>
          <div>
            Задать вопрос или оставить заявку
          </div>
          <div style={style.inlineElements}>
            <div style={style.icons}>
              <IconElement type={'telephone'}/>
              <IconElement type={'whatsApp'}/>
              <IconElement type={'email'}/>
            </div>
            <div style={{float: 'right'}}>
              <div>
                <TextField
                  hintText="Имя"
                />
              </div>
              <div>
                <TextField
                  hintText="Email или телефон"
                />
              </div>
              <div>
                <TextField
                  hintText="Ваше cообщение"
                  multiLine={true}
                  rows={4}
                  rowsMax={4}
                  hintStyle={{bottom: undefined}}
                />
              </div>
              <FlatButton
                onClick={this.handleClick}
                backgroundColor={style.button.backgroundColor}
                label="Отправить"
                labelStyle={{color: '#fff', fontWeight: 'bold', fontFamily: "Avenir Next"}}
                hoverColor={style.button.backgroundColor}
              />
            </div>
          </div>
          <div style={this.state.clicked ? {} : {display: 'none'}}>
            Ваше сообщение отправлено. Спасибо и до скорого!
          </div>
        </div>
      </div>
    )
  }
}

export default Form;