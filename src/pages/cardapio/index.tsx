import { useState } from "react";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import styles from "./Cardapio.module.scss";
import Buscador from "components/Buscador";
import Filtro from "components/Filtro";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardapio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtro filtro={filtro} setFiltro={setFiltro} />
        </div>
      </section>
    </main>
  );
}
