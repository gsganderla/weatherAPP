import { Button, View } from "react-native";
import City from "../../components/city";
import Header from "../../components/header";
import Image from "../../components/img";
import Section from "../../components/section";
import Footer from "../../components/footer";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import Images from "../../components/img";

export default function Home() {


  const [cidade, setCidade] = useState('');
  const [temp, setTemp] = useState(0)
  const [tempMin, setTempMin] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [umidade, setUmidade] = useState(0);
  const [weather, setWeather] = useState('');
  const [city, setCityName] = useState('');

  useEffect(() => {
    obterDadosClima()
  }, [cidade])


  const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
  })

  const obterDadosClima = () => {
    console.log("Iniciando requisição para:", cidade);
    api.get(`weather?q=${cidade}&units=metric&appid=4a7cb1c776fb40c790dd47e9e3a35224&&lang=pt_br`)
      .then((response) => {
        console.log("Deu certo");
        console.log(response.data);

        setTemp(response.data.main.temp);
        setWeather(response.data.weather[0].description);
        setTempMin(response.data.main.temp_min);
        setTempMax(response.data.main.temp_max);
        setUmidade(response.data.main.humidity);
        setCityName(response.data.name);


      }).catch((error) => {
        console.log("Deu errado", error);
      });
  };

  console.log(weather);
  return (

    <View style={styles.container}>
      <Header cidadeValue={cidade} eventHandle={setCidade} eventHandleBotao={obterDadosClima} />
      <City eventHour={city}></City>
      <Images weather={weather}></Images>
      <Section eventDescricao={weather} eventTemperatura={temp} eventUmidade={umidade}></Section>
      <Footer eventTempMin={tempMin} eventTempMax={tempMax}></Footer>
    </View>
  )
}
