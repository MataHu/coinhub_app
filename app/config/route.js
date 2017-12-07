import React, {Component} from "react";
import { View, Image } from "react-native";
import {StackNavigator, TabBarBottom, TabNavigator, TabBarTop} from "react-navigation";
import DirectoryList from "../page/DirectoryList";
import SearchPage from "../page/search/SearchPage";
import SearchFilter from "../page/search/SearchFilter";
import QrCode from "../page/camera/QrCode";
import Collapsible from "../page/customs/Collapsible";
import Attachment from "../page/fit/Attachment";
// import { from } from "rxjs/observable/from";

// import { View } from "../../../Library/Caches/typescript/2.6/node_modules/@types/react-native";

class Navigation extends Component {
  render() {
    return <View style={{flex: 1}}>
      <ModalNavigator />
    </View>;
  }
}

const Tab = TabNavigator(
  {
    TabOne: {
      screen:  DirectoryList,
      navigationOptions: () => ({
        tabBarLabel: "One",
        tabBarIcon: ({ tintColor }) => (
          <Image style={{backgroundColor: tintColor, width: 20, height: 20}} />
        )
      })
    },
    TabTwo: {
      screen: Collapsible,
      navigationOptions: () => ({
        tabBarLabel: "Two",
        tabBarIcon: ({ tintColor }) => (
          <Image style={{backgroundColor: tintColor, width: 20, height: 20}} />
        )
      })
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    swipeEnabled: false,
    animationEnabled: false,
    initialRouteName: "TabOne",
    lazy: true,
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "#ffffff",
      style: {
        backgroundColor: "#333333"
      }
    }
  }
);

const Navigator = StackNavigator(
  {
    Tab: { screen: Tab},
    DirectoryList: {
      screen: DirectoryList,
      navigationOptions: {
        title: "样例"
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
        title: "我的质检任务",
        headerStyle: {elevation: 0, backgroundColor: "#fff", height: 48},
      }
    },
    QrCode: {
      screen: QrCode,
      navigationOptions: {
        title: "二维码扫描",
        headerStyle: {elevation: 0, backgroundColor: "#fff", height: 48},
      }
    },
    Collapsible: {
      screen: Collapsible,
      navigationOptions: {
        title: "展开",
        headerStyle: {elevation: 0, backgroundColor: "#fff", height: 48},
      }
    },
    Attachment: {
      screen: Attachment,
      navigationOptions: {
        title: "入库备注"
      }
    }

  },
  {
    // initialRouteName: "DirectoryList",
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: "#333333",
      showIcon: true
    },
    // mode: "card"
  }
);


const ModalNavigator = StackNavigator(
  {
      MainNavigator: { screen: Navigator },
  },
  {
      mode: 'modal',
      headerMode: 'none',
  }
);

export default Navigation;