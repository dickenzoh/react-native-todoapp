import React, { Component } from 'react'
import {StyleSheet, View, Text, Dimensions, Animated} from 'react-native';

const width = Dimensions.get('window').width

export class SnackBar extends Component {
    state = {
        showm: false,
        animated: new Animated.Value(0)
    }

    componentDidMount(){
        this.togglerBar()
    }

    togglerBar(){
        const newState = !this.state.shown
        this.setState({shown:newState})
        Animated.timing(this.state.animated,{
            toValue:newState?1:8,
            duration:500,
        }).start(newSate?this.hideBar():null)
    }

    hideBar(){
        setTimeout(()=>{this.togglerBar()}, 4000)
    }

    render() {
        const {message, iconName} = this.props
        return (
            <Animated.View style={{ 
                position: 'absolute',
                top: 0,
                backgroundColor: 'black',
                paddingHorizontal: 24,
                paddingVertical:14,
                flexDirection:'row',
                transform:[{
                    translateY:this.state.animated.interpolate({
                        inputRange:[0,1],
                        outputRange:[100,1]
                    })
                }                    
                ]
             }}>
                 <Text numberOfLines={3} style={{ flex: 1, color:'white', fontsize: 16 }}>{message}</Text>               
            </Animated.View>
        );
    }
}

export default SnackBar
