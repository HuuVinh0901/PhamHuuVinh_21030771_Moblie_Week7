import { View, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-web'
import { TouchableOpacity } from 'react-native'
const list = [
    { id: 1, name: 'SmartPhone 1', price: 890,desc:'Best Sales' ,img: require('../assets/img/phone.png'), categories: "SmartPhone" },
    { id: 2, name: 'SmartPhone 2', price: 900, desc:'Best Matched',img: require('../assets/img/phone.png'), categories: "SmartPhone" },
    { id: 3, name: 'SmartPhone 3', price: 980,desc:'Best Sales', img: require('../assets/img/phone.png'), categories: "SmartPhone" },
    { id: 4, name: 'SmartPhone 4', price: 1090, desc:'Popular',img: require('../assets/img/phone.png'), categories: "SmartPhone" },
    { id: 5, name: 'Ipad 1', price: 1090, desc:'Best Sales',img: require('../assets/img/ipad.png'), categories: "Ipad" },
    { id: 6, name: 'Ipad 2', price: 1090, desc:'Best Matched',img: require('../assets/img/ipad.png'), categories: "Ipad" },
    { id: 7, name: 'Ipad 3', price: 1090, desc:'Best Sales',img: require('../assets/img/ipad.png'), categories: "Ipad" },
    { id: 8, name: 'Ipad 4', price: 1090, desc:'Popular',img: require('../assets/img/ipad.png'), categories: "Ipad" },
    { id: 9, name: 'Macbook 1', price: 1090, desc:'Best Sales',img: require('../assets/img/macbook.png'), categories: "Macbook" },
    { id: 10, name: 'Macbook 2', price: 1900,desc:'Best Matched', img: require('../assets/img/macbook.png'), categories: "Macbook" },
    { id: 11, name: 'Macbook 3', price: 1090,desc:'Best Sales', img: require('../assets/img/macbook.png'), categories: "Macbook" },
    { id: 12, name: 'Macbook 4', price: 1090, desc:'Best Sales',img: require('../assets/img/macbook.png'), categories: "Macbook" },
    { id: 13, name: 'Macbook 5', price: 1090, desc:'Best Sales',img: require('../assets/img/macbook.png'), categories: "Macbook" },
    { id: 14, name: 'Macbook 6', price: 1090, desc:'Popular',img: require('../assets/img/macbook.png'), categories: "Macbook" },
    { id: 15, name: 'SmartPhone 5', price: 1090, desc:'Best Sales',img: require('../assets/img/phone.png'), categories: "SmartPhone" },
    { id: 16, name: 'Ipad 5', price: 1090, desc:'Best Sales',img: require('../assets/img/ipad.png'), categories: "Ipad" },
    { id: 17, name: 'Ipad 6', price: 1090, desc:'Best Sales',img: require('../assets/img/ipad.png'), categories: "Ipad" },
    { id: 18, name: 'SmartPhone 6', price: 1090, desc:'Best Sales',img: require('../assets/img/phone.png'), categories: "SmartPhone" },
]
const Screen2 = () => {
    const [selectCate, setSelectCate] = useState('SmartPhone');
    const [selectedDesc,setSelectdDesc]= useState('Best Sales')
    const fillterProduct = list.filter(product => {
        return product.categories === selectCate&&product.desc===selectedDesc})
    
    
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
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#ad6eba' ,borderColor:selectCate==='SmartPhone'?"#0ddede":'white',borderWidth:2}} onPress={() => setSelectCate('SmartPhone')}>
                    <Image style={{ height: 100, width: 120 }} source={require('../assets/img/smart.png')} />


                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#5cb5e6',borderColor:selectCate==='Ipad'?"#0ddede":'white',borderWidth:2 }} onPress={() => setSelectCate('Ipad')}>
                    <Image style={{ height: 100, width: 120 }} source={require('../assets/img/ipad.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#ebc459', borderColor:selectCate==='Macbook'?"#0ddede":'white',borderWidth:2}} onPress={() => setSelectCate('Macbook')}>
                    <Image style={{ height: 100, width: 120 }} source={require('../assets/img/macbook.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 40, marginTop: 10 }}>
                <TouchableOpacity style={{ borderRadius: 10,paddingVertical:5,paddingHorizontal:5,backgroundColor:selectedDesc==='Best Sales'?'#0ddede':'white' }} onPress={()=>setSelectdDesc('Best Sales')}>
                    <Text>Best Sale</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 10,paddingVertical:5,paddingHorizontal:5,backgroundColor:selectedDesc==='Best Matched'?'#0ddede':'white' }}onPress={()=>setSelectdDesc('Best Matched')}>
                    <Text>Best Matched</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 10,paddingVertical:5,paddingHorizontal:5,backgroundColor:selectedDesc==='Popular'?'#0ddede':'white' }}onPress={()=>setSelectdDesc('Popular')}>
                    <Text>Porpular</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column', gap: 10, marginHorizontal: 10, marginTop: 10 }}>
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
                            <Text style={{ fontWeight: 'bold' }}>${dt.price}</Text>
                        </View>

                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={{ marginHorizontal: 10, backgroundColor: 'grey', paddingVertical: 5, alignItems: 'center', borderRadius: 5 }}>
                <Text>See all</Text>
            </TouchableOpacity>
            <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                <Image style={{ height: 100, width: '100%' }} source={require('../assets/img/banner.png')} />
            </View>
            <View style={{ marginTop:10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 30 }}>
                <TouchableOpacity>
                    <Image style={{}} source={require('../assets/img/clarity_home-solid.png')} />
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{}} source={require('../assets/img/search.png')} />
                    <Text>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{}} source={require('../assets/img/mdi_heart-outline.png')} />

                    <Text>Favorite</Text></TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{}} source={require('../assets/img/solar_inbox-outline.png')} />
                    <Text>Inbox</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{}} source={require('../assets/img/codicon_account.png')} />
                    <Text>Account</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Screen2