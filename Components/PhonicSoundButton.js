import { black, whitesmoke } from 'color-name'
import * as React from 'react'
import { Text,View,TouchableOpacity,StyleSheet } from 'react-native'
import {Audio} from 'expo-av'

class PhonicSoundButton extends React.Component{

playSound=async(soundChunk)=>{
 var soundLink="https://s3-whitehatjrcontent.whjr.online/phones/"+soundChunk+".mp3"
 await Audio.Sound.createAsync(
     {uri:soundLink},{shouldPlay:true}
 )
}    

render(){
    return(
        <TouchableOpacity onPress={()=>{
            this.playSound(this.props.soundChunk)
        }} style={styles.chunkButton}><Text style={styles.displayText}>{this.props.wordChunk}</Text>
        </TouchableOpacity>

        //<TouchableOpacity style={styles.chunkButton}>
          //    <Text style={styles.displayText}>{item}</Text>
           // </TouchableOpacity>

    );
 }
}

const styles=StyleSheet.create({
    displayText:{
        fontSize: 15,
        color: 'black',
        justifyContent: 'center',
        textAlign: 'center',
    },

    chunkButton:{
        width:'60%',
        height:50,
        justifyContent:'center',
        margin:5,
        borderRadius:15,
        backgroundColor:'whitesmoke',
        alignSelf:'center',
        alignItems:'center',
    }

})











export default PhonicSoundButton;