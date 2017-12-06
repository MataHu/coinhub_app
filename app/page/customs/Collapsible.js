import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion'

const SECTIONS1 = [
  {
    title: 'First1',
    content: [
      {name: 'First1 item1'},
      {name: 'First1 item2'},
      {name: 'First1 item3'},
      {name: 'First1 item4'},
      {name: 'First1 item5'}
    ],
  },
  {
    title: 'Second1',
    content: [
      {name: 'Second1 item1'},
      {name: 'Second1 item2'},
      {name: 'Second1 item3'},
      {name: 'Second1 item4'},
      {name: 'Second1 item5'}
    ],
  }
];

const SECTIONS2 = [
  {
    title: 'First2',
    content: [
      {name: 'First2 item1'},
      {name: 'First2 item2'},
      {name: 'First2 item3'},
      {name: 'First2 item4'},
      {name: 'First2 item5'},
      {name: 'First2 item6'}
    ],
  },
  {
    title: 'Second2',
    content: [
      {name: 'Second2 item1'},
      {name: 'Second2 item2'},
      {name: 'Second2 item3'},
      {name: 'Second2 item4'},
      {name: 'Second2 item5'}
    ],
  }
];

export default class CollapsibleView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      section: SECTIONS1
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log({nextProps})
  }
  _renderHeader(section) {
    return (
        <View style={{height: 40, alignItems: 'center', backgroundColor: 'white'}}>
          <Text>{section.title}</Text>
        </View>
    );
  }

  _getItemCompt = (item) => {
    return <Text style={{height: 30, alignSelf: 'center'}}>{item.name}</Text>
  }

  _getItemSeparator = () => {
    return <View style={{height: 1, backgroundColor: '#BDBDBD'}}/>
  }

  _getFooterCompt = () => {
    return <View style={{height: 1, backgroundColor: '#BDBDBD'}}/>
  }

  _renderContent(section) {
    return (
        <FlatList
            style={{backgroundColor: 'white'}}
            data={section.content}
            renderItem={({item}) => <Text style={{height: 30, alignSelf: 'center', color: 'blue'}}>{item.name}</Text>}
            initialNumToRender={10}
            ItemSeparatorComponent={this._getItemSeparator}
            ListFooterComponent={this._getFooterCompt}
        />
    );
  }

  render() {
    return (
        <View>
          <Accordion
              sections={this.state.section}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
          />
          <TouchableOpacity onPress={() => {
            this.setState({
              section: SECTIONS2
            })
          }}>
            <Text>切换数据</Text>
          </TouchableOpacity>
        </View>


    );
  }
}