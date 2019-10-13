import React, { Component } from 'react';
import { Navbar, Container, Row, Card, CardText, CardBody, Button } from 'reactstrap';
import './App.css';

const initialState = {
  numQuestion: 1,
  answers: [
    "country(valletta,malta).",
    "country(birkirkara,teste).",
    "country(south_Eastern_Region,teste2).",
    "country(malta_(island),teste3)."],
  rightAnswer: "country(valletta,malta)."
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = initialState;
  }

  setQuestion = (rightAnswer) =>{
    let predicate = rightAnswer.substring(0,rightAnswer.indexOf('('));
    let subject = this.firstLetterUppercase(rightAnswer.substring(rightAnswer.indexOf('(')+1,rightAnswer.indexOf(',')));
    return "The "+predicate+" of "+subject+" is:"
  }

  setOptions = (answers) =>{
    let options = answers.map(a => a.substring(a.indexOf(',')+1,a.lastIndexOf(')')))
    return options.map((option) => 
      <Button 
        value={option}
        key={options.indexOf(option)} 
        onClick={this.checkAnswer}>{this.firstLetterUppercase(option)}</Button>)
  }

  firstLetterUppercase = (value) =>{
    return value.substring(0,1).toUpperCase()+value.substring(1);
  }

  checkAnswer = (event) =>{
    this.setState({numQuestion:this.state.numQuestion+1});
  }

  render() {
    return (
      <div className="App">
        <Navbar id="header">
          <Row>
            <h1>Sigon - Quiz</h1>
          </Row>
        </Navbar>
        <Container>
          <Card>
            <h2 id="questionNum">Questão {this.state.numQuestion}</h2>
            <CardText>
              {this.setQuestion(this.state.rightAnswer)}         
            </CardText>
            {this.setOptions(this.state.answers)}
          </Card>
        </Container>
      </div>
    );
  }
}

export default App;
