import { Component, computed, signal } from '@angular/core';
import { TemaCardComponent } from '../../components/tema-card/tema-card.component';
import { Tema, TipoTema } from '../../interfaces/tema';

@Component({
  selector: 'app-aprendizaje',
  imports: [TemaCardComponent],
  templateUrl: './aprendizaje.page.html',
  styleUrl: './aprendizaje.page.scss',
})
export class AprendizajePage {
  readonly filtros: { valor: 'todos' | TipoTema; etiqueta: string }[] = [
    { valor: 'todos', etiqueta: 'Todos' },
    { valor: 'concepto', etiqueta: 'Conceptos' },
    { valor: 'proyecto', etiqueta: 'Proyectos' },
    { valor: 'actividad', etiqueta: 'Actividades' },
  ];

  readonly filtro = signal<'todos' | TipoTema>('todos');

  readonly temas: Tema[] = [
    {
      titulo: 'Componentes standalone',
      descripcion: 'Creación y composición de componentes que se importan directamente, sin módulos.',
      tecnologias: ['Angular', 'TypeScript'],
      tipo: 'concepto',
    },
    {
      titulo: 'Enrutamiento',
      descripcion: 'Navegación entre páginas con Angular Router, rutas y router-outlet.',
      tecnologias: ['Angular Router'],
      tipo: 'concepto',
    },
    {
      titulo: 'Renderizado dinámico',
      descripcion: 'Generación de interfaz a partir de datos con @for, @if y @empty.',
      tecnologias: ['@for', '@if'],
      tipo: 'concepto',
    },
    {
      titulo: 'Interfaces y tipos',
      descripcion: 'Tipado de los datos con interface y type para evitar errores.',
      tecnologias: ['TypeScript'],
      tipo: 'concepto',
    },
    {
      titulo: 'Diseño con Bootstrap 5',
      descripcion: 'Grilla, tarjetas, navbar y utilidades; comportamiento con ng-bootstrap.',
      tecnologias: ['Bootstrap 5', 'ng-bootstrap'],
      tipo: 'concepto',
    },
    {
      titulo: 'Control de versiones',
      descripcion: 'Repositorio en GitHub, ramas y commits descriptivos.',
      tecnologias: ['Git', 'GitHub'],
      tipo: 'concepto',
    },
    {
      titulo: 'Plataforma de eventos y reservas',
      descripcion: 'Aplicación web con vistas para cliente, agente y administrador.',
      tecnologias: ['Angular', 'Bootstrap', 'Git'],
      tipo: 'proyecto',
    },
    {
      titulo: 'Parcial II: portafolio web',
      descripcion: 'Hoja de vida, aprendizaje del curso y página de tema libre.',
      tecnologias: ['Angular', 'ng-bootstrap', 'SCSS'],
      tipo: 'actividad',
    },
  ];

  readonly temasFiltrados = computed(() => {
    const f = this.filtro();
    return f === 'todos' ? this.temas : this.temas.filter((t) => t.tipo === f);
  });

  cambiarFiltro(valor: 'todos' | TipoTema): void {
    this.filtro.set(valor);
  }
}
