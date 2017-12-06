import React, {Component} from 'react'
import {View, TextInput, TouchableOpacity, Image, StyleSheet, Text, Animated, Easing} from 'react-native'
import {Observable} from 'rxjs/Rx'
import SearchIcon from '../img/search.png'
import ClearSearchIcon from '../img/clear_search.png'
import DropdownIcon from '../img/dropdown_arrow.png'
import {stringTrim} from '../utils/viewHelper'

export default class SearchWithFilter extends Component {
    constructor(props) {
        super()
        this.state = {
            panelOpen: false,
            rotationAnims: new Animated.Value(0)
        }
    }

    openOrClosePanel = () => {
        if (this.state.panelOpen) {
            this.setState({
                panelOpen: false
            })
            Animated.timing(
                this.state.rotationAnims,
                {
                    toValue: 0,
                    duration: 300,
                    easing: Easing.linear
                }
            ).start()
        } else {
            this.setState({
                panelOpen: true
            })
            Animated.timing(
                this.state.rotationAnims,
                {
                    toValue: 0.5,
                    duration: 300,
                    easing: Easing.linear
                }
            ).start()
        }
    }

    renderPanel() {
        if (this.state.panelOpen) {
            return (<View style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 45,
                bottom: 100,
                backgroundColor: 'red'
            }}>
                <View style={{height: 80, backgroundColor: 'yellow'}}/>
            </View>)
        } else {
            return <View/>
        }
    }

    renderDropDownArrow (index) {
        var icon = this.props.arrowImg ? this.props.arrowImg : DropdownIcon
        return (
            <Animated.Image
                source={icon}
                style={{marginLeft: 4,
                    width: 12,
                    height: 10,
                    transform: [{
                        rotateZ: this.state.rotationAnims.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '360deg']
                        })
                    }]}
                } />
        )
    }


    render() {
        const {
            searchInputClearShow, searchTextChange, title, searchText, onSubmitEditing, clearInput
        } = this.props
        return (
            <View  style={{flexDirection: 'column', flex: 1}}>
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
                            returnKeyType="search"
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
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
