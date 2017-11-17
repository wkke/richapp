import React from "react"

import {
    StyleSheet,
    View,
    Text,
    Image
} from "react-native"

import {
    StackNavigator,
    TabNavigator
} from "react-navigation"

var Home = require("../Home/Home")
var Mine = require("../Mine/Mine")

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
}

const MainTabNav = new TabNavigator({
    HomeTab: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: '功能',
            tabBarIcon: () => (
                <Image style={{width: 20, height: 20}}
                       source={{uri: "http://cdn-img.easyicon.net/png/11812/1181290.gif"}}/>
            )
        }
    },
    MonitorTab: {
        screen: Mine,
        navigationOptions: {
            tabBarLabel: 'xx',
        }
    },
    MineTab: {
        screen: Mine,
        navigationOptions: {
            tabBarLabel: '个人中心',
            tabBarIcon: () => (
                <Image style={{width: 20, height: 20}}
                       source={{uri: "http://cdn-img.easyicon.net/png/11742/1174233.gif"}}/>
            )
        }
    }

}, {
    animationEnabled: false,
    tabBarPosition: 'bottom',
    initialRouteName: 'HomeTab',
    swipeEnabled: false,
    backBehavior: 'none',
    tabBarOptions: {
        activeTintColor: '#EF5100',
        inactiveTintColor: '#919191',
        showIcon: true,
        indicatorStyle: {
            height: 0
        },
        style: {
            backgroundColor: '#fff',
        },
        labelStyle: {
            fontSize: 18,
        },
    }
})


const MyApp = StackNavigator({
    HomeTabNav: {
        screen: MainTabNav
    }
}, {
    initialRouteName: "HomeTabNav"
});

module.exports = MyApp