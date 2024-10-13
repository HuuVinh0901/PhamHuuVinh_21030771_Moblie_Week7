import { View, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-web'
import { TouchableOpacity } from 'react-native'
const list = [
    { id: 1, name: 'SmartPhone', price: 890, img: require('../assets/img/phone.png') ,categories:"SmartPhone"},
    { id: 2, name: 'SmartPhone', price: 900, img: require('../assets/img/phone.png') ,categories:"SmartPhone"},
    { id: 3, name: 'SmartPhone', price: 980, img: require('../assets/img/phone.png') ,categories:"SmartPhone"},
    { id: 4, name: 'SmartPhone', price: 1090, img: require('../assets/img/phone.png') ,categories:"SmartPhone"},
    { id: 5, name: 'Ipad', price: 1090, img: require('../assets/img/ipad.png') ,categories:"Ipad"},
    { id: 6, name: 'Ipad', price: 1090, img: require('../assets/img/ipad.png') ,categories:"Ipad"},
    { id: 7, name: 'Ipad', price: 1090, img: require('../assets/img/ipad.png') ,categories:"Ipad"},
    { id: 8, name: 'Ipad', price: 1090, img: require('../assets/img/ipad.png') ,categories:"Ipad"},
    { id: 9, name: 'Macbook', price: 1090, img: require('../assets/img/macbook.png') ,categories:"Macbook"},
    { id: 10, name: 'Macbook', price: 1090, img: require('../assets/img/macbook.png') ,categories:"Macbook"},
    { id: 11, name: 'Macbook', price: 1090, img: require('../assets/img/macbook.png') ,categories:"Macbook"},
    { id: 12, name: 'Macbook', price: 1090, img: require('../assets/img/macbook.png') ,categories:"Macbook"},

]
const Screen2 = () => {
    const [selectCate,setSelectCate] = useState('SmartPhone');
    const fillterProduct=list.filter(product=>product.categories===selectCate)
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
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#ad6eba' }} onPress={()=>setSelectCate('SmartPhone')}>
                    <Image style={{ height: 100, width: 120 }} source={require('../assets/img/smart.png')} />


                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#5cb5e6' }} onPress={()=>setSelectCate('Ipad')}>
                    <Image style={{ height: 100, width: 120 }} source={require('../assets/img/ipad.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#ebc459' }}onPress={()=>setSelectCate('Macbook')}>
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
                {fillterProduct.map((dt) => (
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