import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

export default class Anak extends Component {

    constructor() {
        super();
    }

  render() {
    return (
      <View>
        <FlatList 
            data={this.props.peoples}
            keyExtractor={item => item.name}
            renderItem={
                ({item}) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.status}</Text>
                    </View>
                )
            }
        />
      </View>
    )
  }
}