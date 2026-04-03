"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./style.module.css";

const palavras = [
  { palavra: "formiga", dicas: ["Inseto", "Pequena", "Açúcar"] },
  { palavra: "gato", dicas: ["Animal", "Mia", "Independente"] },
  { palavra: "cachorro", dicas: ["Animal", "Late", "Fiel"] },
  { palavra: "computador", dicas: ["Tecnologia", "Tela", "Teclado"] },
  { palavra: "banana", dicas: ["Fruta", "Amarela", "Doce"] },
  { palavra: "janela", dicas: ["Casa", "Vidro", "Luz"] },
  { palavra: "cadeira", dicas: ["Mobília", "Sentar", "Quatro pernas"] },
  { palavra: "livro", dicas: ["Leitura", "Páginas", "Conhecimento"] },
  { palavra: "internet", dicas: ["Rede", "Global", "Informação"] },
  { palavra: "bicicleta", dicas: ["Transporte", "Pedal", "Duas rodas"] },

  { palavra: "aviao", dicas: ["Transporte", "Voa", "Rápido"] },
  { palavra: "carro", dicas: ["Transporte", "Motor", "Rodas"] },
  { palavra: "lua", dicas: ["Noite", "Satélite", "Brilha"] },
  { palavra: "estrela", dicas: ["Céu", "Brilho", "Distante"] },
  { palavra: "sol", dicas: ["Dia", "Calor", "Luz"] },
  { palavra: "chuva", dicas: ["Água", "Molha", "Céu"] },
  { palavra: "vento", dicas: ["Ar", "Movimento", "Invisível"] },
  { palavra: "fogo", dicas: ["Calor", "Queima", "Perigo"] },
  { palavra: "agua", dicas: ["Líquido", "Beber", "Vida"] },
  { palavra: "terra", dicas: ["Planeta", "Solo", "Natureza"] },

  { palavra: "flor", dicas: ["Planta", "Colorida", "Cheiro"] },
  { palavra: "planta", dicas: ["Verde", "Cresce", "Natureza"] },
  { palavra: "tigre", dicas: ["Animal", "Selvagem", "Listrado"] },
  { palavra: "zebra", dicas: ["Animal", "Listras", "Preto e branco"] },
  { palavra: "leao", dicas: ["Animal", "Juba", "Rei"] },
  { palavra: "abelha", dicas: ["Inseto", "Mel", "Picada"] },
  { palavra: "escola", dicas: ["Estudo", "Alunos", "Sala"] },
  { palavra: "professor", dicas: ["Ensina", "Quadro", "Aula"] },
  { palavra: "aluno", dicas: ["Aprende", "Estuda", "Escola"] },
  { palavra: "caneta", dicas: ["Escrever", "Tinta", "Pequena"] },

  { palavra: "lapis", dicas: ["Escrever", "Grafite", "Apagar"] },
  { palavra: "borracha", dicas: ["Apagar", "Branca", "Escola"] },
  { palavra: "caderno", dicas: ["Anotar", "Folhas", "Espiral"] },
  { palavra: "telefone", dicas: ["Ligar", "Comunicar", "Celular"] },
  { palavra: "teclado", dicas: ["Digitar", "Letras", "PC"] },
  { palavra: "mouse", dicas: ["Clique", "Cursor", "Computador"] },
  { palavra: "monitor", dicas: ["Tela", "Imagem", "PC"] },
  { palavra: "mesa", dicas: ["Superfície", "Objetos", "Casa"] },
  { palavra: "porta", dicas: ["Abrir", "Entrada", "Fechar"] },
  { palavra: "chave", dicas: ["Abrir", "Metal", "Fechadura"] },

  { palavra: "tempo", dicas: ["Horas", "Relógio", "Passa"] },
  { palavra: "noite", dicas: ["Escuro", "Dormir", "Lua"] },
  { palavra: "dia", dicas: ["Claro", "Sol", "Rotina"] },
  { palavra: "praia", dicas: ["Areia", "Mar", "Sol"] },
  { palavra: "mar", dicas: ["Água", "Sal", "Ondas"] },
  { palavra: "rio", dicas: ["Água", "Corrente", "Natureza"] },
  { palavra: "montanha", dicas: ["Alta", "Escalar", "Natureza"] },
  { palavra: "cidade", dicas: ["Prédios", "Movimento", "Pessoas"] },
  { palavra: "rua", dicas: ["Carros", "Caminho", "Cidade"] },
  { palavra: "amigo", dicas: ["Confiança", "Companhia", "Pessoa"] },

  { palavra: "familia", dicas: ["Casa", "União", "Parentes"] },
  { palavra: "amor", dicas: ["Sentimento", "Coração", "Afeto"] },
  { palavra: "feliz", dicas: ["Alegria", "Sorriso", "Bem"] },
  { palavra: "triste", dicas: ["Chorar", "Emoção", "Desânimo"] },
  { palavra: "jogo", dicas: ["Diversão", "Regras", "Competição"] },
  { palavra: "bola", dicas: ["Rolar", "Redonda", "Esporte"] },
  { palavra: "futebol", dicas: ["Gol", "Chute", "Campo"] },
  { palavra: "basquete", dicas: ["Cesta", "Quadra", "Bola"] },
  { palavra: "musica", dicas: ["Som", "Ouvir", "Arte"] },
  { palavra: "filme", dicas: ["Cinema", "História", "Tela"] },

  { palavra: "serie", dicas: ["Episódios", "TV", "Assistir"] },
  { palavra: "padaria", dicas: ["Pão", "Comida", "Manhã"] },
  { palavra: "mercado", dicas: ["Compras", "Alimentos", "Loja"] },
  { palavra: "hospital", dicas: ["Saúde", "Médico", "Cuidado"] },
  { palavra: "farmacia", dicas: ["Remédio", "Saúde", "Loja"] },
  { palavra: "esporte", dicas: ["Atividade", "Corpo", "Competição"] },
  { palavra: "energia", dicas: ["Força", "Movimento", "Eletricidade"] },
  { palavra: "luz", dicas: ["Ilumina", "Energia", "Claridade"] },
  { palavra: "som", dicas: ["Barulho", "Ouvido", "Vibração"] }
];

function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace("ç", "c");
}

export default function Forca() {
  const [obj, setObj] = useState(null);
  const [letras, setLetras] = useState([]);
  const [erros, setErros] = useState(0);
  const [moedas, setMoedas] = useState(0);
  const [dificuldade, setDificuldade] = useState("facil");
  const [desistiu, setDesistiu] = useState(false);
  const [nivelDica, setNivelDica] = useState(0);
  const [premiado, setPremiado] = useState(false);

  const dificuldades = { facil: 10, medio: 7, dificil: 5 };
  const recompensa = { facil: 1, medio: 2, dificil: 3 };

  const maxErros = dificuldades[dificuldade];

  useEffect(() => {
    novaPalavra();
  }, [dificuldade]);

  function novaPalavra() {
    const p = palavras[Math.floor(Math.random() * palavras.length)];
    setObj(p);
    setLetras([]);
    setErros(0);
    setDesistiu(false);
    setNivelDica(0);
    setPremiado(false);
  }

  if (!obj) return null;

  const palavra = obj.palavra;

  function tentar(letra) {
    if (letras.includes(letra) || venceu || perdeu || desistiu) return;

    setLetras((prev) => [...prev, letra]);

    if (!normalizar(palavra).includes(letra)) {
      setErros((prev) => prev + 1);
    }
  }

  function usarDica() {
    if (moedas <= 0 || venceu || perdeu || desistiu) return;

    setMoedas((prev) => prev - 1);

    if (nivelDica < 3) {
      setNivelDica((prev) => prev + 1);
    } else {
      const faltando = palavra
        .split("")
        .filter((l) => !letras.includes(normalizar(l)));

      if (faltando.length === 0) return;

      const letra = normalizar(
        faltando[Math.floor(Math.random() * faltando.length)]
      );

      setLetras((prev) => [...prev, letra]);
    }
  }

  function reiniciar() {
    if (confirm("Deseja reiniciar o jogo?")) {
      novaPalavra();
    }
  }

  const venceu = palavra.split("").every((l) => letras.includes(normalizar(l)));
  const perdeu = erros >= maxErros;

  if (venceu && !premiado) {
    setMoedas((prev) => prev + recompensa[dificuldade]);
    setPremiado(true);
  }

  const palavraOculta = palavra
    .split("")
    .map((l) =>
      letras.includes(normalizar(l)) || perdeu || desistiu ? l : "_"
    )
    .join(" ")
    .toUpperCase();

  const partes = Math.floor((erros / maxErros) * 10);

  const teclado = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  return (
    <div className={styles.container}>
      <h1>Jogo da Forca</h1>

      <div className={styles.dificuldades}>
        <button className={`${styles.facil} ${dificuldade==="facil" && styles.ativo}`} onClick={()=>setDificuldade("facil")}>Fácil</button>
        <button className={`${styles.medio} ${dificuldade==="medio" && styles.ativo}`} onClick={()=>setDificuldade("medio")}>Médio</button>
        <button className={`${styles.dificil} ${dificuldade==="dificil" && styles.ativo}`} onClick={()=>setDificuldade("dificil")}>Difícil</button>
      </div>

      <p className={styles.moedas}>💰 {moedas}</p>

      <div className={styles.forca}>
        <div className={styles.poste}></div>
        <div className={styles.topo}></div>
        <div className={styles.corda}></div>

        {partes >= 1 && <div className={styles.cabeca}></div>}
        {partes >= 2 && <div className={styles.corpo}></div>}
        {partes >= 3 && <div className={styles.braco1}></div>}
        {partes >= 4 && <div className={styles.braco2}></div>}
        {partes >= 5 && <div className={styles.perna1}></div>}
        {partes >= 6 && <div className={styles.perna2}></div>}
        {partes >= 7 && <div className={styles.olho1}></div>}
        {partes >= 8 && <div className={styles.olho2}></div>}
        {partes >= 9 && <div className={styles.boca}></div>}
        {partes >= 10 && <div className={styles.chapeu}></div>}
      </div>

      <p className={styles.palavra}>{palavraOculta}</p>

      {nivelDica > 0 && (
        <div>
          {obj.dicas.slice(0, nivelDica).map((d, i) => (
            <p key={i}>Dica {i + 1}: {d}</p>
          ))}
        </div>
      )}

      <div className={styles.teclado}>
        {teclado.map((linha,i)=>(
          <div key={i}>
            {linha.split("").map((l)=>{
              let classe = styles.neutra;
              if (letras.includes(l)) {
                classe = normalizar(palavra).includes(l)
                  ? styles.correta
                  : styles.errada;
              }
              return (
                <button key={l} className={classe} onClick={()=>tentar(l)}>
                  {l}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {venceu && <h2 style={{ color: "#22c55e" }}>🎉 Você venceu!</h2>}
      {perdeu && <h2 style={{ color: "#ef4444" }}>💀 Você perdeu! Palavra: {palavra.toUpperCase()}</h2>}

      {(venceu || perdeu) && (
        <button className={styles.proximo} onClick={novaPalavra}>
          ▶ Próxima Palavra
        </button>
      )}

      <div className={styles.botoes}>
        <button onClick={usarDica}>💡 Dica</button>
        <button onClick={reiniciar}>🔄 Reiniciar</button>
        <Link href="/">⬅ Voltar ao Portfólio</Link>
      </div>
    </div>
  );
}