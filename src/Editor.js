import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import styled from 'styled-components';
import 'brace/mode/python';
import 'brace/mode/javascript';
import 'brace/mode/java';
import 'brace/theme/dracula';
import 'brace/mode/typescript';
import { Button, Select } from 'antd';
const Code = styled(AceEditor)`
  height:85vh;
  #codeeditor {
    max-height:85vh;
  }
`;
const EditorMenu = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  padding:0.5rem;
`;
export default class Editor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      language:'python',
      value:'#type your code here'
    }
  }
  onChange =(newValue) => {
    this.setState({
      value:newValue
    })
  };
  onSelectLanguage = (value) => {
    this.setState({
      language:value
    })
  }
  render(){
    return(
      <div>
        <EditorMenu>
          <Select
            style={{width:'30%'}}
            onChange={this.onSelectLanguage}
            value={this.state.language}>
            <Select.Option value={'python'}>Python</Select.Option>
            <Select.Option value={'javascript'}>Java</Select.Option>
            <Select.Option value={'java'}>JavaScript</Select.Option>
          </Select>
          <Button>Save</Button>
        </EditorMenu>
    <Code
      mode={this.state.language}
      theme="dracula"
      onChange={this.onChange}
      value={this.state.value}
      name="codeeditor"
      height={'80vh'}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine
      editorProps={{$blockScrolling: Infinity}}
      onLoad={(editor) => {
        editor.focus();
        editor.getSession().setUseWrapMode(true);
      }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />

      </div>
    )
  }
}
