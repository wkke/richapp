import React, {Component} from "react"
import {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity
} from "react-native"

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

var myData = require("./shareData.json");

// 一些常量设置
var cols = 3;
var cellWH = screenWidth / cols;


class Home extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        headerTitle: '功能',
        headerTitleStyle: {
            alignSelf: 'center',
            color: "#fff"
        },
        headerStyle: {
            backgroundColor: "#108EE9"
        }
    })

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (oldRow, newRow) => oldRow !== newRow});
        this.state = {
            dataSource: ds.cloneWithRows(myData.data)
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.listViewStyle}
            />
        )
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => {
                alert('哈哈')
            }}>
                <View style={styles.innerViewStyle}>
                    <Text style={styles.iconStyle}>&#xe904;</Text>
                    <Text style={{marginTop: 10,color:"#919191",fontSize:14}}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
        flex: 1
    },
    listViewStyle: {
        // 改变主轴的方向
        flexDirection: 'row',
        // 多行显示
        flexWrap: 'wrap'
    },

    iconStyle: {
        fontFamily:'Rtlcons',
        fontSize:26
    },

    innerViewStyle: {
        width: cellWH,
        height: cellWH,
        // 居中
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        borderRightWidth: 1,
        borderRightColor: "#F5F5F5",
        borderBottomWidth: 1,
        borderBottomColor: "#F5F5F5",
        justifyContent: 'center'

    }
})

module.exports = Home