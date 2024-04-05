import { Text, View, StyleSheet, Image, ScrollView,ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import {Entypo, MaterialCommunityIcons, AntDesign} from "@expo/vector-icons";
import {Dimensions} from "react-native";

export default function vitrine({navigation}) {
  const hei = Dimensions.get('window').height;
  const wid = Dimensions.get('window').width;
  return (
    <ScrollView style={{backgroundColor:'white'}}>
     <ImageBackground source={require('../images/background.jpg')}  style={{width:wid, height:3.5*wid}}>
     
    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:'10%'}}>
      <Entypo name='flower' size={wid/9} color='#3708ad'
      style={{marginLeft:wid/48}}
      />

       <View style={{flexDirection:'row', marginTop:hei/50}}>
      <Entypo name='location-pin' color='#3708ad'size={wid/16}/>
      <Text style={{fontWeight:'bold', fontSize:wid/25, marginTop:wid/80}}>Paraty,
      </Text>

      <Text style={{fontSize:wid/25, marginTop:wid/80}}> RJ
      </Text>
      </View>

      <Image source={require('../images/flower.jpg')} 
      style={{width:wid/10,height:wid/10, marginLeft:wid/48, marginTop:hei/160, marginRight:wid/48,borderRadius:20}}
      />
      </View>


    <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'row', marginTop:hei/50, marginLeft:wid/48, backgroundColor:'#EBF0F2', borderRadius:5, height:hei/17}}>
        <Entypo name='magnifying-glass'size={wid/13} color='grey' 
        style={{marginLeft:wid/96, marginTop:hei/80}} />

        <TextInput placeholder=' Search'
          style={{color:'grey',backgroundColor:'#EBF0F2',marginLeft: wid/96,width:wid/1.4, borderRadius:5, height:hei/19,fontSize:wid/18,marginTop:hei/175}}
          />
      </View>
      
      <View style={{alignItems:'center', width:'12%', height:hei/17, backgroundColor:'#3708ad', 
      borderRadius:5, marginLeft:wid/48, marginTop:hei/50}}>
        <AntDesign name='bars' size={wid/11} color='white'
        style={{marginTop:wid/96}} 
        />
      </View>
    </View>
    
    <View>
     <Image source={require('../images/marketplace.jpeg')} 
    style={{width:wid-20, height:hei/4, marginLeft:wid/48, marginTop:wid/24, borderRadius:20
    }}
    />
  </View>

  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
  <Text style={{color: '#3708ad', fontSize:wid/13, marginLeft:wid/48, fontWeight:'bold', marginTop:hei/30}}>Available Services</Text> 

  <Text style={{fontWeight:'bold', fontSize:wid/29, marginRight:wid/48, marginTop:hei/22, color:'#323250'}}>See all</Text>
  </View>

  
   <View style={{backgroundColor:'#EBF0F2', borderRadius:12,
    height:hei/3.2, marginTop:wid/24, marginLeft:wid/48, marginRight:wid/48, flexDirection:'row', shadowColor: '#98A6B3',
      shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
          shadowRadius: 15}}>

     <Image source={require('../images/costureira.jpg')} 
     style={{width:wid/3, height:hei/3.2, borderRadius:5}}
     />

     <View style={{flexDirection:'column', marginLeft:wid/50, marginRight:wid/10}}>
    
      <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:hei/80}}>
        <Text style={{fontWeight:'bold', fontSize:hei/40, color:'#3708ad'}}>Dolls Dressmaker</Text>

         <View style={{flexDirection:'row', marginLeft:wid/40, marginTop:hei/200}}>
            <MaterialCommunityIcons name='star-outline' size={wid/20} color='#3708ad'
            style={{ }}
            />
            <Text style={{fontWeight:'bold', fontSize:hei/80, color:'#828296', marginTop:hei/150
            }}>4.7</Text>
         </View>
      </View>

     <View style={{marginTop:hei/100, width:wid/2, height:hei/5.9}}>
        <Text style={{color:'grey', fontSize:hei/65}}>
        I create beautiful and unique outfits that bring joy to both children and collectors alike. Using high-quality fabrics, lace, and other embellishments, I design and sew dresses, skirts, and accessories for dolls of all sizes and styles. 
        </Text>
     </View>

     <View style={{flexDirection:'row', marginTop:hei/120}}>
     <View style={{backgroundColor:'#3708ad', width:wid/6, height:wid/10, borderRadius:5, alignItems:'center' ,flexDirection:'row', marginLeft:wid/140}}>
     <Text style={{fontSize:hei/60, color:'#AFD767', fontWeight:'bold', marginLeft:wid/50}}>Cart</Text>

     <View style={{height:wid/8, borderRadius:50, backgroundColor:'#AFD767', width:wid/8, alignItems:'center', marginLeft:wid/80}}>
      <Entypo name='shopping-cart'size={wid/15}color='#3708ad' style={{marginTop:hei/80}}
     />
     </View>
     </View>

     <View style={{backgroundColor:'#3708ad', width:wid/4, height:wid/10, borderRadius:5, alignItems:'center' ,flexDirection:'row', marginLeft:wid/12}}>
     <Text style={{fontSize:hei/60, color:'#AFD767', fontWeight:'bold', marginLeft:wid/50}}>Message</Text>

     <View style={{height:wid/8, borderRadius:50, backgroundColor:'#AFD767', width:wid/8, alignItems:'center', marginLeft:wid/80}}>
      <MaterialCommunityIcons name='message-reply-text'size={wid/15}color='#3708ad' style={{marginTop:hei/80}}
     />
     </View>
     </View>
     </View>

     </View>

    </View>

     <View style={{backgroundColor:'#EBF0F2', borderRadius:12,
    height:hei/3.2, marginTop:wid/24, marginLeft:wid/48, marginRight:wid/48, flexDirection:'row', shadowColor: '#98A6B3',
      shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
          shadowRadius: 15}}>

     <Image source={require('../images/fotografa.jpg')} 
     style={{width:wid/3, height:hei/3.2, borderRadius:5}}
     />

     <View style={{flexDirection:'column', marginLeft:wid/50, marginRight:wid/10}}>
    
      <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:hei/80}}>
        <Text style={{fontWeight:'bold', fontSize:hei/40, color:'#3708ad'}}>Photographer</Text>

         <View style={{flexDirection:'row', marginLeft:wid/40, marginTop:hei/200}}>
            <MaterialCommunityIcons name='star-outline' size={wid/20} color='#3708ad'
            style={{ }}
            />
            <Text style={{fontWeight:'bold', fontSize:hei/80, color:'#828296', marginTop:hei/150
            }}>4.3</Text>
         </View>
      </View>

     <View style={{marginTop:hei/100, width:wid/2, height:hei/5.9}}>
        <Text style={{color:'grey', fontSize:hei/65}}>
        As a photographer, I capture the beauty of everyday life through my lens. From intimate weddings to large corporate events, I love the challenge of capturing the essence of the moment and delivering high-quality images that my clients cherish. 
        </Text>
     </View>

     <View style={{flexDirection:'row', marginTop:hei/120}}>
     <View style={{backgroundColor:'#3708ad', width:wid/6, height:wid/10, borderRadius:5, alignItems:'center' ,flexDirection:'row', marginLeft:wid/140}}>
     <Text style={{fontSize:hei/60, color:'#AFD767', fontWeight:'bold', marginLeft:wid/50}}>Cart</Text>

     <View style={{height:wid/8, borderRadius:50, backgroundColor:'#AFD767', width:wid/8, alignItems:'center', marginLeft:wid/80}}>
      <Entypo name='shopping-cart'size={wid/15}color='#3708ad' style={{marginTop:hei/80}}
     />
     </View>
     </View>

     <View style={{backgroundColor:'#3708ad', width:wid/4, height:wid/10, borderRadius:5, alignItems:'center' ,flexDirection:'row', marginLeft:wid/12}}>
     <Text style={{fontSize:hei/60, color:'#AFD767', fontWeight:'bold', marginLeft:wid/50}}>Message</Text>

     <View style={{height:wid/8, borderRadius:50, backgroundColor:'#AFD767', width:wid/8, alignItems:'center', marginLeft:wid/80}}>
      <MaterialCommunityIcons name='message-reply-text'size={wid/15}color='#3708ad' style={{marginTop:hei/80}}
     />
     </View>
     </View>
     </View>

     </View>

    </View>

    <TouchableOpacity  onPress={ () => navigation.navigate('content1')}>
 
     <View style={{backgroundColor:'#EBF0F2', borderRadius:12,
    height:hei/3.2, marginTop:wid/24, marginLeft:wid/48, marginRight:wid/48, flexDirection:'row', shadowColor: '#98A6B3',
      shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
          shadowRadius: 15}}>

     <Image source={require('../images/donuts.jpg')} 
     style={{width:wid/3, height:hei/3.2, borderRadius:5}}
     />

     <View style={{flexDirection:'column', marginLeft:wid/50, marginRight:wid/10}}>
    
      <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:hei/80}}>
        <Text style={{fontWeight:'bold', fontSize:hei/40, color:'#3708ad'}}>Yummy donuts</Text>

         <View style={{flexDirection:'row', marginLeft:wid/40, marginTop:hei/200}}>
            <MaterialCommunityIcons name='star-outline' size={wid/20} color='#3708ad'
            style={{ }}
            />
            <Text style={{fontWeight:'bold', fontSize:hei/80, color:'#828296', marginTop:hei/150
            }}>4.2</Text>
         </View>
      </View>

     <View style={{marginTop:hei/100, width:wid/2, height:hei/5.9}}>
        <Text style={{color:'grey', fontSize:hei/65}}>
        Everyday, I bake delicious, yummy donuts at my own house. There are many different flavours: chocolate, double chocolate, mint, blueberry, strawberry frosted, Cinnamon Twist, Old-fashioned, and more. If it is the costumer's preference, I can do the flavour you want even if it is not in the menu.  
        </Text>
     </View>

     <View style={{flexDirection:'row', marginTop:hei/120}}>
     <View style={{backgroundColor:'#3708ad', width:wid/6, height:wid/10, borderRadius:5, alignItems:'center' ,flexDirection:'row', marginLeft:wid/140}}>
     <Text style={{fontSize:hei/60, color:'#AFD767', fontWeight:'bold', marginLeft:wid/50}}>Cart</Text>

     <View style={{height:wid/8, borderRadius:50, backgroundColor:'#AFD767', width:wid/8, alignItems:'center', marginLeft:wid/80}}>
      <Entypo name='shopping-cart'size={wid/15}color='#3708ad' style={{marginTop:hei/80}}
     />
     </View>
     </View>

     <View style={{backgroundColor:'#3708ad', width:wid/4, height:wid/10, borderRadius:5, alignItems:'center' ,flexDirection:'row', marginLeft:wid/12}}>
     <Text style={{fontSize:hei/60, color:'#AFD767', fontWeight:'bold', marginLeft:wid/50}}>Message</Text>

     <View style={{height:wid/8, borderRadius:50, backgroundColor:'#AFD767', width:wid/8, alignItems:'center', marginLeft:wid/80}}>
      <MaterialCommunityIcons name='message-reply-text'size={wid/15}color='#3708ad' style={{marginTop:hei/80}}
     />
     </View>
     </View>
     </View>

     </View>

    </View>

</TouchableOpacity>

 
 <View style={{alignItems:'center', marginTop:20}}>  
    <TouchableOpacity>
    <View style={{backgroundColor:'#3708ad', borderRadius:12, alignItems:'center', alignContent:'center',
    height:40, width:100, marginLeft:0, shadowColor: '#98A6B3',
      shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
          shadowRadius: 15}}>
  <Text style={{fontWeight:'bold', fontSize:16, marginTop:7.5, color:'white'}}>See more</Text>
  </View>
  </TouchableOpacity>
  </View>

    <View style={{height:30}}></View>

    </ImageBackground>

    </ScrollView>
  );
}