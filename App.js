import React from 'react';
import {Text, View} from 'react-native';
 
  var cat = {
        name: "Amy",
        age: 2,
        gender: "male",
        address: "epping"
      };


const Cat = (name) => {
  return 'hello, i am '+ name +' in cat';
};
{/* {name} argument must be used within <>tags*/}
const Cats =(name) =>{
 return(
   <Text>hello, cats of {name.n1}</Text>
 );
};
const Cat2 = props => {
  return (
    <View>
      <Text>Hello, I am {props.name1} in Cat2!</Text>
    </View>
  );
};

const Cafe = (name2) => {
  return (
    <View>
     <Text> {Cat("Tom")} </Text>
     <Text> {Cats(n1="Lol")} </Text>
     <Text> hello, {name2} cafe</Text>
     {/* <Cat2> using props call the Cat2 function is differnt with pass value into const Cats =(name) =>{};, and keep the attribute name of props the same as props.name, eg. props.name1 with <Cat2 name1='Maru'> */}
     <Cat2 name1='Maru'></Cat2>     
     <Cat name1="Maru" /> 
     <Cats n1='Maru' /> 

     <Cat2 name1={cat.name} > </Cat2>
    </View>
  );
};

const Cafe2=()=>{
 return <Text>{Cafe('GG')}</Text>
};


export default Cafe2;