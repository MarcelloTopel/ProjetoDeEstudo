import React from 'react';
import { ITarefa } from '../../types/tarefa';
import style from './Lista.module.scss';
import Item from './Item'; // Certifique-se de que o caminho está correto

interface Props {
  tarefas: ITarefa[];
  selecioneTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecioneTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            selecionaTarefa={selecioneTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;