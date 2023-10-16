import React from 'react';
import {Text, View} from 'react-native';

const Cat = (name) => {
  return 'hello, i am '+ name;
};
{/* {name} argument must be used within <>tags*/}
const Cats =(name) =>{
 return(
   <Text>hello, cats of {name}</Text>
 );
};
const Cat2 = props => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
};

const Cafe = (name2) => {
  return (
    <View>
     <Text> {Cat("Tom")} </Text>
     <Text> {Cats("Lol")} </Text>
     <Text> hello, {name2} cafe</Text>
     {/* <Cat2> using props call the Cat2 function is differnt with pass value into const Cats =(name) =>{};, and keep the attribute name of props the same props.name could be props.name1 with <Cat2 name1='Maru'> */}
     <Cat2 name='Maru' />     
     <Cat name="Maru" /> 
    </View>
  );
};

const Cafe2=()=>{
 return <Text>{Cafe('GG')}</Text>
};


export default Cafe2;