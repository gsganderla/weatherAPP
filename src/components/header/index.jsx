import { Button, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function Header(props){
    return(
        <View style={styles.container}>
            <TextInput onChangeText={props.eventHandle} value={props.cidadeValue} placeholder="Informe a cidade" style={styles.cardInput}/>
        </View>
    )
}