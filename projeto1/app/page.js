"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Olá!</h1>

      <h2>Meu nome é Luiz Henrique Camello</h2>

      <p className={styles.texto}>
        Sou estudante de Ciência da Computação e estou aprendendo desenvolvimento web e mobile com Next.js.
      </p>

      <p className={styles.texto}>
        Este site é um projeto prático e inclui um jogo da forca para demonstrar lógica e interação com o usuário.
      </p>

      <Link href="/forca" className={styles.button}>
        🎮 Jogar Forca
      </Link>
    </div>
  );
}