import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  NativeModules
} from 'react-native';

const searchReminders = [
  {name: '物料编码'},
  {name: '物料名称'},
  {name: '质检工人'},
  {name: '工位工位'},
  {name: '计划号'},
  {name: '项目号'},
  {name: '订单号'},
  {name: '客户名'}]
const sectionData = [
  {
    data: [{name: '本日', selected: true}, {name: '本周', selected: false}, {name: '本月', selected: false}, {
      name: '全部',
      selected: false
    }], key: '计划开始', multi: false
  },
  {
    data: [{name: '本日', selected: true}, {name: '本周', selected: false}, {name: '本月', selected: false}, {
      name: '全部',
      selected: false
    }], key: '计划结束', multi: false
  },
  {
    data: [{name: '未就绪', selected: true}, {name: '可执行', selected: false}, {name: '进行中', selected: false}, {
      name: '已完成',
      selected: false
    }], key: '质检状态', multi: true
  }
]
export default class DirectoryItem extends Component {
  route = (index) => {
    if (index === 0) {
      // this.props.navigation.navigate('SearchPage')
      const params = {come4: '质检', searchReminders, sectionData, withFilter: false}
      this.props.navigation.navigate('SearchFilter', params)
    }

    if (index === 1) {
      const params = {come4: '质检', searchReminders, sectionData, withFilter: true}
      this.props.navigation.navigate('SearchFilter', params)
    }

    if (index === 2) {
      NativeModules.qrCode.openCamera()
    }

    if (index === 3) {
      NativeModules.qrCode.openCustomCamera()
    }

    if (index === 4) {
      this.props.navigation.navigate('Collapsible')
    }

    if (index === 5) {
      this.props.navigation.navigate('Attachment')
    }
  }

  render() {
    const {item, index} = this.props.item;
    return (<TouchableOpacity style={styles.container} onPress={() => this.route(index)}>
      <Text>{item.name}</Text>
    </TouchableOpacity>)
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    marginLeft: 20
  },
  text: {
    color: 'black'
  }
})