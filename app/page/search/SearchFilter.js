import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SectionList,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import SearchTextInput from '../../widgets/SearchInput'
import color from '../../config/colors'

const dismissKeyboard = require('dismissKeyboard')

const screenH = Dimensions.get('window').height
const screenW = Dimensions.get('window').width


export default class SearchPage extends Component {

  constructor(props) {
    super();
    this.state = {
      searchInputClearShow: false,
      searchText: '',
    }
  }

  componentWillMount() {
    const {withFilter} = this.props.navigation.state.params
    if (withFilter) {
      const sections = this._getSections() // 准备数据， 初始化选择的值
      const filterValue = this._getInitialFilterValue()
      this.setState({
        sections,
        filterValue
      })
    }
  }

  _searchTextChange = (text) => {
    this.setState({
      searchText: text,
      searchInputClearShow: text.length > 0
    })
  }

  _onSubmitEditing = () => {

  }

  _clearInput = () => {
    this.setState({
      searchText: '',
      searchInputClearShow: false
    })
  }

  _getHeaderCompt = () => {
    const {searchReminders} = this.props.navigation.state.params;
    if (searchReminders) {
      return (
          <View style={{backgroundColor: 'white'}}>
            <Text style={styles.reminderTitle}>搜索指定内容</Text>
            <FlatList
                style={styles.reminderView}
                data={searchReminders}
                numColumns={4}
                horizontal={false}
                renderItem={({item, index}) =>
                    <View style={styles.reminderItemView}>
                      <Text style={{color: color.Deep_grey}}>{item.name}</Text>
                    </View>}
            />
          </View>
      )
    }
    return <View/>

  }

  _getDefaultBorderStyle = (index, length) => {
    return {
      borderLeftColor: color.Silver_grey,
      borderLeftWidth: 1,
      borderTopColor: color.Silver_grey,
      borderTopWidth: 1,
      borderBottomColor: color.Silver_grey,
      borderBottomWidth: 1,
      borderRightColor: color.Silver_grey,
      borderRightWidth: ((index > 0 && index % 3 === 0) || index === length - 1) ? 1 : 0
    }
  }

  _getSelectedBorderStyle = () => {
    return {
      borderColor: color.Blacklake_green,
      borderWidth: 1
    }
  }

  _changeSelectedState = (key, position) => {
    let selectedKey = '';
    let selectedValue = 'sssss';
    const newSections = this.state.sections.map((value) => {
      if (key === value.key) {
        let changeValue = value.data[0].data.map((element, index) => {
          if (!value.multi) {
            if (position === index) {
              let temp = {}
              temp[key] = element.name
              this.setState({
                filterValue: {...this.state.filterValue, ...temp}
              })
              return {
                ...element,
                selected: true
              }
            } else {
              return {
                ...element,
                selected: false
              }
            }
          } else {
            // 放置数组
            // 1. 将拿到数据放到数组，然后剔除重复元素
            if (position === index) {
              this.setState({
                filterValue: this.state.filterValue[value.key] = element.name
              })
              return {
                ...element,
                selected: !element.selected
              }
            } else {
              return element
            }
          }
        })
        return {
          data: [{data: changeValue}],
          key: value.key,
          multi: value.multi,
          renderItem: ({item}) => this._getFilterList(item, value.key)
        }
      } else {
        return value
      }
    })
    this.setState({
      sections: newSections
    })
  }

  _getFilterListItem = (item, index, length, key) => <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        this._changeSelectedState(key, index)
      }}
      style={[styles.filterItemView, item.selected ? this._getSelectedBorderStyle() : this._getDefaultBorderStyle(index, length)
      ]}>
    <Text style={{color: item.selected ? color.Blacklake_green : color.Dark_grey}}>{item.name}</Text>
  </TouchableOpacity>


  _getFilterList = (item, key) => {
    const length = item.data.length
    return (<FlatList
        style={{backgroundColor: 'white', marginLeft: 8, paddingTop: 6, paddingBottom: 6, marginRight: 8}}
        removeClippedSubviews={false}
        numColumns={4}
        data={item.data}
        renderItem={({item, index}) => this._getFilterListItem(item, index, length, key)}
    />)
  }

  _getFooterCompt = () => {
    return (<View style={{height: 48}}/>)
  }

  _onPressReSet = () => {
    const {withFilter} = this.props.navigation.state.params
    if (withFilter) {
      const sections = this._getSections() // 准备数据
      this.setState({
        sections
      })
    }
  }

  _onPressConfirm = () => {

  }

  _getSectionHeader = ({section}) => <View style={styles.sectionHeader}>
    <Text style={{color: color.Deep_grey}}>
      {section.key}
    </Text>
  </View>

  _getMenuView = () => {
    return (<View style={[styles.menuView, {borderTopColor: color.Middle_grey, borderTopWidth: 0.8}]}>
      <TouchableOpacity style={styles.menuItemView} onPress={this._onPressReSet}>
        <Text style={{color: color.Dark_grey}}>重置</Text>
      </TouchableOpacity>
      <View style={{width: 1, backgroundColor: color.Middle_grey}}/>
      <TouchableOpacity style={styles.menuItemView} onPress={this._onPressConfirm}>
        <Text style={{color: color.Blacklake_green}}>确定</Text>
      </TouchableOpacity>
    </View>)
  }

  _getInitialFilterValue = () => {
    const {sectionData} = this.props.navigation.state.params;
    console.log({sectionData})
    let filterValue = {}
    sectionData.map((value, index) => {
      value.data.map((element, index) => {
        if (index === 0) {
          filterValue[value.key] = element.name
        }
      })
    })
    return filterValue
}

  _getSections = () => {
    const {sectionData} = this.props.navigation.state.params;
    const newData = sectionData.map((value, index) => {
      return {
        data: [{data: value.data}],
        key: value.key,
        multi: value.multi,
        renderItem: ({item}) => this._getFilterList(item, value.key)
      }
    })
    return newData
  }

  _getEmptyView = () => <View style={{flex: 1,}}/>

  render() {
    const {withFilter} = this.props.navigation.state.params
    return <View style={{backgroundColor: 'white'}}>
      <SearchTextInput
          title={"搜索"}
          withFilter={withFilter}
          searchTextChange={this._searchTextChange}
          searchInputClearShow={this.state.searchInputClearShow}
          searchText={this.state.searchText}
          onSubmitEditing={this._onSubmitEditing}
          clearInput={this._clearInput}
      />
      {this.state.sections && withFilter && <SectionList
          style={{height: screenH - 56 - 45 - 16}}
          ListHeaderComponent={this._getHeaderCompt}
          ListFooterComponent={this._getFooterCompt}
          initialNumToRender={20}
          renderSectionHeader={this._getSectionHeader}
          sections={this.state.sections}
      />}
      {withFilter && this._getMenuView()}
      {!withFilter && this._getEmptyView()}
    </View>
  }
}

const styles = StyleSheet.create({
  reminderView: {
    marginLeft: 34,
    marginRight: 34,
    marginBottom: 10
  },
  reminderItemView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: (screenW - 68) / 4,
    paddingBottom: 4,
    paddingTop: 4
  },
  filterItemView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: (screenW - 16) / 4,
    marginTop: 4,
    marginBottom: 4,
    padding: 8
  },
  reminderTitle: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 14,
    marginBottom: 6,
    color: color.Middle_grey
  },
  menuView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 48,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  menuItemView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionHeader: {
    height: 28,
    backgroundColor: color.Grey_white,
    justifyContent: 'center',
    marginLeft: 8
  }
})