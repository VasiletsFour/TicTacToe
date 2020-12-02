import React, { useState } from 'react';
import { Text, View } from './Themed';
import { Button } from 'react-native';

export const Field=({value, handelPress}:any)=> {
    const [res, setRes] = useState(value)
        return(
            <View style={{backgroundColor:"red", width:40, height:20, marginTop:10}}><Button title={res} color="#00000" onPress={()=>{handelPress;setRes('x')}}/></View>
        )
    };
