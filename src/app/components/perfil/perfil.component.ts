import { Component } from '@angular/core';

interface Perfil {
  nombre: string;
  titulo: string;
  resumen: string;
}

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
})
export class PerfilComponent {
  perfil: Perfil = {
    nombre: 'Andrés Mauricio Navarro',
    titulo: 'Estudiante de Ingeniería · UCEVA',
    resumen:
      'Estudiante apasionado por el desarrollo de software, con interés en aplicaciones web, ' +
      'bases de datos y arquitectura de computadores. Me gusta aprender trabajando en proyectos ' +
      'reales y en equipo.',
  };

  get iniciales(): string {
    return this.perfil.nombre
      .split(' ')
      .filter((p) => p.length > 0)
      .slice(0, 2)
      .map((p) => p[0])
      .join('')
      .toUpperCase();
  }
}