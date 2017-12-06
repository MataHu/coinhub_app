import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  DeviceEventEmitter,
  Platform
} from 'react-native';
import DirectoryItem from '../components/items/DirectoryItem'

export default class DirectorList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {name: '单个搜索'},
        {name: '搜索+筛选'},
        {name: '二维码'},
        {name: '自定义二维码扫描'},
        {name: '手风琴组件'},
        {name: '屏幕适配'}
      ]
    }
  }

  onUpdate = (code) => {
    console.log(code)
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      DeviceEventEmitter.addListener('updateCode', e => this.onUpdate(e))
    }
  }

  getItemCompt = (item, index) => {
    const {navigation} = this.props
    return <DirectoryItem
        item={item}
        index={index}
        navigation={navigation}/>
  }

  getFooterCompt = () => {
    return <View style={{height: 1, backgroundColor: '#BDBDBD'}}/>
  }

  getItemSeparator = () => {
    return <View style={{height: 1, backgroundColor: '#BDBDBD'}}/>
  }

  render() {
    return (
        <FlatList
            style={styles.container}
            data={this.state.items}
            renderItem={this.getItemCompt}
            initialNumToRender={10}
            ItemSeparatorComponent={this.getItemSeparator}
            ListFooterComponent={this.getFooterCompt}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  item: {
    width: 150,
    height: 40,
    backgroundColor: '#3D5AFE',
    justifyContent: 'center',
    alignItems: 'center'
  }
});