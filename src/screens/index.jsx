import { Text, View } from "react-native";
import Clock from "../components/clock";
import Header from "../components/header";
import Image from "../components/img";
import Section from "../components/section";
import Footer from "../footer";
import { styles } from "./styles";


export default function Home(){
    return(

        <View style={styles.container}>
            <Header/>
            <Clock></Clock>
            <Image></Image>
            <Section></Section>
            <Footer></Footer>
        </View>
    )
}
