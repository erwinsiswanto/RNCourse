import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Anak from './Anak';

export default class Induk extends Component {

    constructor() {
        super();

        this.state = {
            peoples: [
                {
                    name: 'Obi Wan',
                    status: 'Jedi'
                },
                {
                    name: 'Luke Skywalker',
                    status: 'Padawan'
                }
            ]
        };
    }

  render() {
    return (
      <View>
        <Anak
            peoples={this.state.peoples}
        />
      </View>
    )
  }
}