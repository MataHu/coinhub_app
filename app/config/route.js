import React, {Component} from 'react'
import {StackNavigator, TabBarBottom, TabNavigator, TabBarTop} from 'react-navigation'
import DirectoryList from '../page/DirectoryList'
import SearchPage from '../page/search/SearchPage'
import SearchFilter from '../page/search/SearchFilter'
import QrCode from '../page/camera/QrCode'
import Collapsible from '../page/customs/Collapsible'
import Attachment from '../page/fit/Attachment'

class Navigation extends Component {
  render() {
    return <Navigator/>
  }
}

const Navigator = StackNavigator(
    {
      DirectoryList: {
        screen: DirectoryList,
        navigationOptions: {
          title: '样例'
        }
      },
      SearchPage: {
        screen: SearchPage,
        navigationOptions: {
          header: null
        }
      },
      SearchFilter: {
        screen: SearchFilter,
        navigationOptions: {
          title: '我的质检任务',
          headerStyle: {elevation: 0, backgroundColor: '#fff', height: 48},
        }
      },
      QrCode: {
        screen: QrCode,
        navigationOptions: {
          title: '二维码扫描',
          headerStyle: {elevation: 0, backgroundColor: '#fff', height: 48},
        }
      },
      Collapsible: {
        screen: Collapsible,
        navigationOptions: {
          title: '展开',
          headerStyle: {elevation: 0, backgroundColor: '#fff', height: 48},
        }
      },
      Attachment: {
        screen: Attachment,
        navigationOptions: {
          title: '入库备注'
        }
      }

    },
    {
      initialRouteName: 'DirectoryList',
      navigationOptions: {
        headerBackTitle: null,
        headerTintColor: '#333333',
        showIcon: true
      },
      mode: 'card'
    }
)

export default Navigation