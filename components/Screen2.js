import { View, Image, Text } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-web'
import { TouchableOpacity } from 'react-native'
const list = [
    { id: 1, name: 'SmartPhone', price: 890, img: require('../assets/img/phone.png') ,categories:"phone"},
    { id: 2, name: 'SmartPhone', price: 900, img: require('../assets/img/phone.png') ,categories:"phone"},
    { id: 3, name: 'SmartPhone', price: 980, img: require('../assets/img/phone.png') ,categories:"phone"},
    { id: 4, name: 'SmartPhone', price: 1090, img: require('../assets/img/phone.png') ,categories:"phone"},
    { id: 5, name: 'SmartPhone', price: 1090, img: require('../assets/img/phone.png') ,categories:"phone"},
    { id: 6, name: 'SmartPhone', price: 1090, img: require('../assets/img/phone.png') ,categories:"phone"},
    { id: 7, name: 'SmartPhone', price: 1090, img: require('../assets/img/phone.png') ,categories:"phone"},
    { id: 8, name: 'SmartPhone', price: 1090, img: require('../assets/img/phone.png') ,categories:"phone"},
    { id: 9, name: 'SmartPhone', price: 1090, img: require('../assets/img/phone.png') ,categories:"phone"},
    { id: 10, name: 'SmartPhone', price: 1090, img: require('../assets/img/phone.png') ,categories:"phone"},
    { id: 11, name: 'SmartPhone', price: 1090, img: require('../assets/img/phone.png') ,categories:"phone"},
]
const Screen2 = () => {
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', borderRadius: 1, backgroundColor: 'grey', marginHorizontal: 10, width: '80%', paddingVertical: 5 }}>
                <Image style={{ height: 20, width: 20 }} source={require('../assets/img/search.png')} />
                <TextInput placeholder='Search'>

                </TextInput>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row', marginHorizontal: 10 }}>
                <View style={{ width: '70%' }}>
                    <Text style={{ fontWeight: 'bold' }}>Categories</Text>
                </View>

                <TouchableOpacity style={{ width: '30%', alignItems: 'flex-end', paddingHorizontal: 10 }}>
                    <Text>See all</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10, gap: 5, marginTop: 20 }}>
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#ad6eba' }}>
                    <Image style={{ height: 100, width: 120 }} source={require('../assets/img/smart.png')} />


                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#5cb5e6' }}>
                    <Image style={{ height: 100, width: 120 }} source={require('../assets/img/ipad.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#ebc459' }}>
                    <Image style={{ height: 100, width: 120 }} source={require('../assets/img/macbook.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 40, marginTop: 10 }}>
                <TouchableOpacity style={{ borderRadius: 10 }}>
                    <Text>Best Sale</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 10 }}>
                    <Text>Best Matched</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 10 }}>
                    <Text>Porpular</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column', gap: 10, marginHorizontal: 10 ,marginTop:10}}>
                {list.map((dt) => (
                    <TouchableOpacity style={{ flexDirection: 'row' }} key={dt.id}>
                        <View style={{ width: '30%' }}>
                            <Image style={{}} source={dt.img} />
                        </View>

                        <View style={{ flexDirection: 'column', width: '50%' }}>
                            <Text>{dt.name}</Text>
                            <Image style={{}} source={require('../assets/img/Rating5.png')} />
                        </View>
                        <View style={{ width: '20%', alignItems: 'flex-end' }}>
                            <Text style={{fontWeight:'bold' }}>${dt.price}</Text>
                        </View>

                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

export default Screen2