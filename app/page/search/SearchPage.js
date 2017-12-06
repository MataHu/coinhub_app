import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import SearchTextInput from '../../widgets/SearchWithFilter'

export default class SearchPage extends Component {

    constructor(props) {
        super();
        this.state={
            searchInputClearShow: false,
            searchText: ''
        }
    }
    _searchTextChange = (text) => {
        console.log('change: ', text)
        this.setState({
            searchText: text,
            searchInputClearShow: text.length > 0
        })
    }

    _onSubmitEditing = () => {
        console.log('submit: ', this.state.searchText)
    }

    _clearInput = () => {
        console.log('clear')
        this.setState({
            searchText: '',
            searchInputClearShow: false
        })
    }
    render() {
        return <View style={{flex: 1, backgroundColor: '#B3E5FC'}}>
            <SearchTextInput
                title={"物料编号/物料名称/负责人/目的地"}
                searchTextChange={this._searchTextChange}
                searchInputClearShow={this.state.searchInputClearShow}
                searchText={this.state.searchText}
                onSubmitEditing={this._onSubmitEditing}
                clearInput={this._clearInput}
            />
        </View>
    }
}