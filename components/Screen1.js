import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-web'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const users=[
  {email:'user1',pwd:'123'},
  {email:'user2',pwd:'123'},
  {email:'user3',pwd:'123'},
  {email:'user4',pwd:'123'},
  {email:'user5',pwd:'123'},
]
const Screen1 = () => {
  const [email,setEmail]= useState('')
  const[password,setPassword]= useState('');
  const navigation= useNavigation();
  const handleContinue=()=>{
    const user= users.find(
      (user)=>user.email===email && user.pwd===password
    )
    if(user){
      navigation.navigate('Screen2');
    }
    else{
      console.log('Sai')
    }
  }
  return (
    <ScrollView>
      <View>
        <View style={{ alignItems: 'center', justifyContent: 'center' ,marginTop:80}}>
          <Image style={{ height: 100, width: 100 }} source={require('../assets/img/icon.png')} />
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Hello Again!</Text>
          <Text>Log into your account</Text>
        </View>
        <View style={{ borderWidth: 1, borderRadius: 5, flexDirection: 'row', paddingVertical: 5, marginHorizontal: 10, marginTop: 30 }}>
          <Image style={{ height: 15, width: 17, marginLeft: 5 }} source={require('../assets/img/Vector.png')} />
          <TextInput style={{ marginLeft: 5 }} placeholder='Enter your email address' value={email} onChangeText={setEmail}></TextInput>
        </View>
        <View style={{ borderWidth: 1, borderRadius: 5, flexDirection: 'row', paddingVertical: 5, marginHorizontal: 10, marginTop: 15 }}>
          <Image style={{ height: 15, width: 17, marginLeft: 5 }} source={require('../assets/img/lock.png')} />
          <TextInput style={{ marginLeft: 5 }} placeholder='Enter your password'
          value={password} onChangeText={setPassword}
          ></TextInput>
          <TouchableOpacity style={{ marginLeft: 150 }}>
            <Image style={{ height: 15, width: 17 }} source={require('../assets/img/eye.png')} />
          </TouchableOpacity>

        </View>
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'flex-end', marginHorizontal: 10, marginTop: 10 }}>
          <Text style={{ color: '#0ddede' }}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, backgroundColor: '#0ddede', marginHorizontal: 10, marginTop: 10 }}
        onPress={handleContinue}>
          <Text style={{ color: 'white' }}>Continue</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginVertical: 20, alignItems: 'center', justifyContent: 'center' }}>

          <Text>or</Text>

        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <TouchableOpacity>
            <Image style={{ height: 35, width: 40 }} source={require('../assets/img/face.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ height: 35, width: 40 }} source={require('../assets/img/google.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ height: 35, width: 40 }} source={require('../assets/img/face.png')} />
          </TouchableOpacity>


        </View>
      </View>
    </ScrollView>
  )
}

export default Screen1