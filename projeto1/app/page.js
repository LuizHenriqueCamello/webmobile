"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Olá!</h1>

        <h2>Meu nome é Luiz Henrique Camello</h2>

        <p>
          Sou estudante de Ciência da Computação e estou aprendendo
          desenvolvimento web com Next.js. Gosto de criar projetos simples e
          funcionais para praticar programação.
        </p>

        <p>
          Este site foi feito como exercício, e inclui um jogo da forca feito em
          JavaScript.
        </p>

        <Link href="/forca" className={styles.button}>
          🎮 Jogar Forca
        </Link>
      </main>
    </div>
  );
}