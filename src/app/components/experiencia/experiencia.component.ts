import { Component } from '@angular/core';
import { Experiencia } from '../../interfaces/experiencia';

@Component({
  selector: 'app-experiencia',
  imports: [],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss',
})
export class ExperienciaComponent {
  experiencias: Experiencia[] = [
    {
      titulo: 'Plataforma web de eventos y reservas',
      descripcion:
        'Aplicación web para gestionar eventos y reservas, con vistas para cliente, agente y administrador. Proyecto en equipo de 4 personas.',
      periodo: '2026',
      tecnologias: ['Angular', 'TypeScript', 'Git'],
    },
    {
      titulo: 'Emulador de arquitectura Von Neumann',
      descripcion:
        'Emulador en Python que simula el ciclo de instrucciones de una arquitectura Von Neumann. Proyecto integrador de Arquitectura de Computadores.',
      periodo: '2026',
      tecnologias: ['Python'],
    },
    {
      titulo: 'Módulos en ensamblador NASM con C++',
      descripcion:
        'Ejercicios que combinan C/C++ como programa principal con rutinas en NASM x64.',
      periodo: '2026',
      tecnologias: ['C++', 'NASM'],
    },
  ];
}