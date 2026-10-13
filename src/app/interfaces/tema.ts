export type TipoTema = 'concepto' | 'proyecto' | 'actividad';

export interface Tema {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  tipo: TipoTema;
}