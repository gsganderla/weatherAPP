import { TextInput, View } from "react-native";
import { styles } from "./styles";

export default function Header(){
    return(
        <View style={styles.container}>
            <TextInput placeholder="Informe a Cidade" style={styles.cardInput}/>
        </View>
    )
}