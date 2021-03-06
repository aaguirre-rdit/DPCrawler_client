import React, { Component } from 'react';
import {Typography} from 'antd';
import styled from 'styled-components';
import Editor from "./Editor";
import ExerciseList from "./ExerciseList";
import {getList, submitExercise} from "./api";
import ExerciseView from './ExerciseView';
const Container = styled.div`
  display:flex;
  justify-content:space-evenly;
  max-height:95vh;
`;
const Title = styled.h1`
  font-weight:100;
  font-size:3rem;
  letter-spacing: 3px;
  text-align:center;
  color:black;
`;
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedExerciseId: undefined,
      exerciseList: []
    }
  }
  componentDidMount() {
    getList().then((res)=>{
      if (res.data){
        console.log(res.data)
        this.setState({
          exerciseList:res.data
        })
      }
    })
  }
  onSave = (id,value, language) =>{
    console.log({id,value,language});
    const data = {
      exercise_id:id,
      content:value,
      language:language
    };
    console.log({data})
    submitExercise(data).then(res => {
      console.log(res.data)
    })
  };
  resetId = ()=> {
    this.setState({
      selectedExerciseId:null,
    })
  };
  onExerciseClick = (id)=>{
    this.setState({
      selectedExerciseId:id,
    })
  };
  render() {
    return (
      <div className="App">
        <Title>{'<Daily Programmer/>'}</Title>
        <Container>
          {
            this.state.selectedExerciseId ? (
              <ExerciseView id={this.state.selectedExerciseId} goBack={this.resetId}/>
            ) :
              <ExerciseList list={this.state.exerciseList} OnClick={this.onExerciseClick}/>
          }

          <Editor onSave={this.onSave} exerciseId={this.state.selectedExerciseId}/>
        </Container>
      </div>
    );
  }
}

export default App;
