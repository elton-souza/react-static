import { Dispatch, SetStateAction } from "react";
import filtros from "./filtros.json";
import styles from "./Filtro.module.scss";
import classNames from "classnames";

interface Props {
  filtro: number | null;
  setFiltro: Dispatch<SetStateAction<number | null>>;
}

type IOpcao = typeof filtros[0];

export default function Filtro({ filtro, setFiltro }: Props) {
  const selecionarFiltro = (opcao: IOpcao) => {
    if (opcao.id === filtro) return setFiltro(null);
    return setFiltro(opcao.id);
  };

  return (
    <div className={styles.filtros}>
      {filtros.map((option) => (
        <button
          key={option.id}
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles["filtros__filtro--ativo"]]: filtro === option.id,
          })}
          onClick={() => selecionarFiltro(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
