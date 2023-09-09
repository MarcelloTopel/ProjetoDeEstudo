import React, { useEffect, useState } from 'react';
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/time";

interface Props {
  selecionado?: {
    tempo: string;
  };
  finalizarTarefa?: () => void; // Add this prop
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      if (finalizarTarefa) { // Check if finalizarTarefa is defined
        finalizarTarefa();
      }
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>

      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>

      <Botao onClick={() => regressiva(tempo)}>
        Começar!
      </Botao>

      {finalizarTarefa && (
        <Botao onClick={finalizarTarefa}>
          Finalizar Tarefa
        </Botao>
      )}
    </div>
  );
}
