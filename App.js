import React from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  Button,
  Card
} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "aaa"
    }
  }

  AddName = () => {
    this.setState({
      username: "bbb"
    })
  }

  RemoveName = () => {
    this.setState({
      username: ''
    })
  }

  render()
  {
    return (
      <View>
        <Text>Hello World</Text>
        
        <Button
        title=" New Button"
        icon={
          <Icon
            name="arrow-right"
            size={12}
            color="blue"
          />
        }
         />

         <Card>
           <Text>{this.state.username}</Text>
         </Card>

         <View style={{ padding: 20, }}>
         <Button 
              title="Add Name"
              onPress={this.AddName}
            />
            <Button 
              title="Remove Name"
              onPress={this.RemoveName}
            />
         </View>
      </View>
    )
  }
}