import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Clock(){
    return(
        <View style={styles.container}>
           <Text style={styles.clockText}>00:00</Text>
           <Text style={styles.weekendText}>Segunda-feira</Text>
        </View>
    )
}