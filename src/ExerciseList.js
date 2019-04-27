import React from 'react';
import styled from 'styled-components';
import "antd/dist/antd.css";
import {Tabs,Card} from 'antd';
import easySVG from './images/easy.svg';
import mediumSVG from './images/medium.svg';
import hardSVG from './images/hard.svg';
const TabPane = Tabs.TabPane;
const ListContainer = styled.div`
  max-height:85vh;
  overflow-y:scroll;
`;


export default class ExerciseList extends React.Component{
  render(){
    const easyData = this.props.list.filter(exercise => exercise.difficulty==='Easy');
    const mediumData = this.props.list.filter(exercise => exercise.difficulty==='Intermediate');
    const hardData = this.props.list.filter(exercise => exercise.difficulty==='Hard');

    return(
      <div style={{flex:1, width:'50%',padding:'0 2rem'}}>
      <Tabs defaultActiveKey="All" >
        <TabPane tab="All" key="All">
          <ListContainer>
          {this.props.list.map(exercise=>(
            <Card
              style={{margin:'1rem 0.5rem'}}
              hoverable
              onClick={()=>this.props.OnClick(exercise.id)}
            ><Card.Meta
              title={exercise.title}
              avatar={<img src={
                exercise.difficulty === 'Hard' ? hardSVG :
                  exercise.difficulty === 'Medium' ? mediumSVG :
                    easySVG
              }/>}
              description={
                exercise.description.split(' ').slice(0,20).join(' ')+'...'}
            >}
              date</Card.Meta></Card>
            ))}
          </ListContainer>
        </TabPane>
        <TabPane tab="Hard" key="Hard">
          <ListContainer>
            {hardData.map(exercise=>(
              <Card
                style={{margin:'1rem 0.5rem'}}
                hoverable
                onClick={()=>this.props.OnClick(exercise.id)}
              ><Card.Meta
                title={exercise.title}
                avatar={<img src={hardSVG}/>}
                description={
                  exercise.description.split(' ').slice(0,20).join(' ')+'...'}
              >}
                date</Card.Meta></Card>
            ))}
          </ListContainer>
        </TabPane>
        <TabPane tab="Internediate" key="Intermediate"><ListContainer>
          {mediumData.map(exercise=>(
            <Card
              style={{margin:'1rem 0.5rem'}}
              hoverable
              onClick={()=>this.props.OnClick(exercise.id)}
            ><Card.Meta
              title={exercise.title}
              avatar={<img src={mediumSVG}/>}
              description={
                exercise.description.split(' ').slice(0,20).join(' ')+'...'}
            >}
              date</Card.Meta></Card>
          ))}
        </ListContainer></TabPane>
        <TabPane tab="Easy" key="Easy"><ListContainer>
          {easyData.map(exercise=>(
            <Card
              style={{margin:'1rem 0.5rem'}}
              hoverable
              onClick={()=>this.props.OnClick(exercise.id)}
            ><Card.Meta
              title={exercise.title}
              avatar={<img src={easySVG}/>}
              description={
                exercise.description.split(' ').slice(0,20).join(' ')+'...'}
            >}
              date</Card.Meta></Card>
          ))}
        </ListContainer></TabPane>
      </Tabs>
      </div>
    )
  }
}
