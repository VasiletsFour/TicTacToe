import React from 'react';
import { FlatList } from "react-native";
import { Text, View } from './Themed';
import {Field  } from "./Field";

const result = [
    {field:"1"},
    {field:"2"},
    {field:""},
    {field:""},
    {field:""},
    {field:""},
    {field:""},
    {field:""},
    {field:""}
]

export const Game=()=> {
    
    return(
        <View style={{backgroundColor:"green", width:300, height:300}}>
            <FlatList  data={result} renderItem={(item:any)=>{return <Field value={item.item.field} handelPress={()=>{item.item.field="0"; console.log(item)}}/>}}/>
        </View>
)}