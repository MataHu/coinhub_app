
// 普通页面的适配
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import Colors from '../../config/colors'
import theme from '../../config/theme'
import {setSpText, scaleSize} from "../../utils/ScreenUtil";

import fontSize from  '../../config/fontSize'
import ScreenSize from "../../config/screenSize";

const dismissKeyboard = require('dismissKeyboard')

export default class Attachment extends Component{
  render(){
    console.log({padding: scaleSize(32)})
    console.log({width: Dimensions.get('window').width})
    return (<TouchableOpacity style={{flex: 1, backgroundColor: '#f8f9fb'}}
                              activeOpacity={1}
                              onPress={() => dismissKeyboard()}>
      <View style={{backgroundColor: 'white', padding: 16}}>
        <View>
          <Text style={{backgroundColor: 'red',color: '#1F273D', fontSize: fontSize.p, fontWeight: '500'}}>
            备注内容
          </Text>
          <Text style={{backgroundColor: 'yellow',fontSize: fontSize.p, fontWeight: '500', color: '#8E98AE'}}>
            (如果变动请在此处修改；只对当前任务有效。)
          </Text>
        </View>
        <View style={{
          borderColor: Colors.Black,
          borderWidth: 1,
          marginTop: 16,
          marginBottom: 45,
          height: (theme.screenWidth - 32) * 2 / 5}}>
          <TextInput
              multiline
              style={{flex: 1,
                padding: 6,
                fontSize: fontSize.p,
                textAlignVertical: 'top'
              }}
              maxLength={100}
              underlineColorAndroid={'transparent'}
              autoFocus
          />
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text style={{margin: 4, fontSize: fontSize.h6}}>0/100</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>)
  }
}


