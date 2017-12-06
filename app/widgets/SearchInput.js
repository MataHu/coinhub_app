import React, {Component} from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  Animated,
  Easing
} from 'react-native'
import {Observable} from 'rxjs/Rx'
import SearchIcon from '../img/search.png'
import ClearSearchIcon from '../img/clear_search.png'
import {stringTrim} from '../utils/viewHelper'
import color from '../config/colors'
import backIcon from '../../node_modules/react-navigation/src/views/assets/back-icon.png'

export default class SearchInput extends Component {

  render() {
    const {
      searchInputClearShow, searchTextChange, title, searchText, onSubmitEditing, clearInput, withFilter
    } = this.props
    return (
        <View
            style={styles.toolbar}>
          <View style={styles.backView}>
            <Image style={{height: 16, width: 16, marginLeft: 10}}
                   source={SearchIcon}/>
            <TextInput
                ref="searchTextInput"
                style={styles.textInput}
                underlineColorAndroid="transparent"
                placeholderTextColor="#ababab"
                multiline={false}
                autoFocus={withFilter ? false : true}
                returnKeyType={withFilter ? "done" : "search"}
                placeholder={title}
                onSubmitEditing={() => {
                  if (searchText) {
                    const value = stringTrim(searchText) // 去掉空字符串
                    if (searchText && value && value.length > 0) {
                      onSubmitEditing()
                    } else {
                      console.log('input search submit expty')
                      Observable.of('refresh')
                          .delay(400)
                          .subscribe(it => {
                            this.refs.searchTextInput.focus()
                          })
                    }
                  } else {
                    Observable.of('refresh')
                        .delay(400)
                        .subscribe(it => {
                          console.log('input search submit expty')
                          this.refs.searchTextInput.focus()
                        })
                  }
                }}
                onChangeText={(text) => searchTextChange(text)}
            />
            {searchInputClearShow
                ? <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      this.refs.searchTextInput.clear()
                      this.refs.searchTextInput.focus()
                      clearInput()
                    }}
                    style={{
                      height: 30,
                      width: 30,
                      alignSelf: 'center',
                      alignItems: 'center'
                    }}>
                  <Image style={{height: 16, width: 16, marginTop: 7}}
                         source={ClearSearchIcon}/>
                </TouchableOpacity>
                : null}
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.Light_grey,
    height: 45
  },
  backView: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.9,
    backgroundColor: '#FAFAFA'
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    height: 30,
    padding: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#313131',
    marginLeft: 10
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16
  },
  filterText: {
    color: 'black',
    fontSize: 13,
    marginRight: 4,
    textAlign: 'left'
  },
  panelView: {
    backgroundColor: 'white'
  }
})