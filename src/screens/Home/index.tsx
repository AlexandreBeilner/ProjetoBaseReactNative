import React, { useState } from "react";
import { HomeContainer } from "./styles.ts";
import { CustomButton } from "../../components/CustomButton";
import { CustomInput } from "../../components/CustomInput";
import { LoadingCar } from "../../components/LoadingCar";

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return(
    <HomeContainer>
      <CustomButton backGroundColor={"#002039"} label={"Login"} labelColor={"white"} onPress={() => {}}></CustomButton>
      <CustomInput value={name} onChangeText={setName} placeHolder={"Nome Completo"}></CustomInput>
      <CustomInput value={email} onChangeText={setEmail} placeHolder={"Email Institucional"}></CustomInput>
      <CustomInput value={password} onChangeText={setPassword} placeHolder={"Senha"} isPassword={true}></CustomInput>
      <CustomInput value={confirmPassword} onChangeText={setConfirmPassword} placeHolder={"Confirmar Senha"} isPassword={true}></CustomInput>
      <LoadingCar iniciaLeft={0} finalLeft={100}/>
    </HomeContainer>
  )
}

export {Home}
