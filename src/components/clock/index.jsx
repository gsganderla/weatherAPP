import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Clock(props){

    return(
        <View style={styles.container}>
           <Text style={styles.clockText} >{props.eventHour}</Text>
           <Text style={styles.weekendText}>{props.eventCidade}</Text>
        </View>
    )
}