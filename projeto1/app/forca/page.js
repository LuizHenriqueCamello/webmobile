"use client";

import { useState, useEffect } from "react";
import styles from "./style.module.css";

const palavras = [
  "arara","bolo","lobo","bola","carro","casa","gato","cachorro",
  "livro","mesa","cadeira","janela","porta","sol","lua","mar",
  "rio","peixe","flor","planta","pedra","areia","vento","chuva",
  "nuvem","fogo","terra","pato","vaca","cabra","tigre","leao",
  "zebra","urso","formiga","abelha","banana","uva"
];

export default function Forca() {
  const [palavra, setPalavra] = useState(""); // inicializa vazia
  const [letras, setLetras] = useState([]);
  const [erros, setErros] = useState(0);
  const maxErros = 10;

  // Gera a palavra apenas no cliente
  useEffect(() => {
    const random = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(random);
  }, []);

  const tentarLetra = (letra) => {
    if (!palavra || letras.includes(letra)) return;

    setLetras([...letras, letra]);

    if (!palavra.includes(letra)) {
      setErros(erros + 1);
    }
  };

  const palavraOculta = palavra
    ? palavra.split("").map((l) => (letras.includes(l) ? l : "_")).join(" ")
    : "";

  const venceu = palavra && palavra.split("").every((l) => letras.includes(l));
  const perdeu = erros >= maxErros;

  function reiniciar() {
    const random = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(random);
    setLetras([]);
    setErros(0);
  }

  return (
    <div className={styles.container}>
      <h1>Jogo da Forca 🎮</h1>

      <div className={styles.forca}>
        <div className={styles.base}></div>
        <div className={styles.poste}></div>
        <div className={styles.topo}></div>
        <div className={styles.corda}></div>

        {erros >= 1 && <div className={styles.cabeca}></div>}
        {erros >= 2 && <div className={styles.corpo}></div>}
        {erros >= 3 && <div className={styles.bracoEsq}></div>}
        {erros >= 4 && <div className={styles.bracoDir}></div>}
        {erros >= 5 && <div className={styles.pernaEsq}></div>}
        {erros >= 6 && <div className={styles.pernaDir}></div>}
        {erros >= 7 && <div className={styles.olhoEsq}></div>}
        {erros >= 8 && <div className={styles.olhoDir}></div>}
        {erros >= 9 && <div className={styles.boca}></div>}
        {erros >= 10 && <div className={styles.chapeu}></div>}
      </div>

      <p className={styles.palavra}>{palavraOculta}</p>
      <p>Erros: {erros} / {maxErros}</p>
      <p>Letras usadas: {letras.join(", ")}</p>

      {venceu && <h2 className={styles.win}>🎉 Você venceu!</h2>}
      {perdeu && <h2 className={styles.lose}>💀 Você perdeu! Palavra: {palavra}</h2>}

      {!venceu && !perdeu && (
        <div className={styles.teclado}>
          {"abcdefghijklmnopqrstuvwxyz".split("").map((letra) => (
            <button key={letra} onClick={() => tentarLetra(letra)}>
              {letra}
            </button>
          ))}
        </div>
      )}

      <button onClick={reiniciar} className={styles.reset}>
        🔄 Reiniciar
      </button>
    </div>
  );
}