import React from "react";
import Texto from "../../../componentes/Texto";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Botao(props) {
  return (
    <TouchableOpacity style={estilos.botao}>
      <Texto style={estilos.textoBotao}>{props.botao}</Texto>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
