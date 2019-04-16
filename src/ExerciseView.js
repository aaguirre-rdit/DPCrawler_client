import React from 'react';
import styled from 'styled-components';
import {getExerciseById} from "./api";
import {Icon, Spin, Button} from "antd";
import Interweave from 'interweave';
const Container = styled.div`
  flex:1;
  padding: 0 2rem;
`;
const BackDiv = styled.div`
  padding:0.5rem 0;
  margin-bottom:0.5rem;
`;
const DescriptionContainer = styled.div`
  overflow-y:scroll;
  padding:1rem;
  max-height:80vh;
  padding-bottom:5rem;
`;
export default class ExerciseView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:{}
    }
  }
  componentDidMount(){
    getExerciseById(this.props.id).then(res => {
      if (res.data){
        this.setState({
          data:res.data
        })
      }
    })
  }
  render(){
    return(
        <Container>
          {this.state.data.id ?
              <div>
                <BackDiv>
              <Button onClick={this.props.goBack}>
                <Icon type="double-left" />
              </Button>
                </BackDiv>
              <h3>{this.state.data.title}</h3>
                <DescriptionContainer>
                {(<Interweave content={this.state.data.description.replace(/(?:\r\n|\r|\n)/g, '<br />')}></Interweave>)}
                </DescriptionContainer>
              </div>
            :

              <Spin></Spin>}


    </Container>

    )
  }
}
