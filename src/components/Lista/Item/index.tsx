// Import statements
import { ITarefa } from '../../../types/tarefa';
import style from './item.module.scss'; // Ensure the correct file name and path

// Props interface
interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

// Item component
export default function Item(
  {
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa // Corrected prop name
  }: Props) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
      onClick={() => !completado && selecionaTarefa(
        {
          tarefa,
          tempo,
          selecionado,
          completado,
          id
        }
      )}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
    </li>
  );
}
