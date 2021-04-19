import React, {Component} from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    values: []
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
         .then((response) => {
          this.setState({
            values: response.data
          })

         })

   
  }


  render() {
    return (
      <div>
         <Header as='h2'>
    <Icon name='users' />
    <Header.Content>NimeniAltii.Ro</Header.Content>
  </Header>
  <List>
  {this.state.values.map((value) => (
             <List.Item key={value.id}>{value.name}</List.Item>
           ))}
  </List>
      </div>
    );
  }
}

export default App;
