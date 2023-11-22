import { Button, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import {MagnifyingGlassCircleIcon} from 'react-native-heroicons/outline'


export default function Header(props){
    return(
        <View style={styles.container}>
            <TextInput onChangeText={props.eventHandle} value={props.cidadeValue} placeholder="Informe a cidade" style={styles.cardInput}/>
            <TouchableOpacity onPress={props.eventHandleBotao}>
            <MagnifyingGlassCircleIcon size="30" color="white"/>
            </TouchableOpacity>
        </View>
    )
}