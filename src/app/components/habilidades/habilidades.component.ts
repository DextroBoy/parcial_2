import { Component } from '@angular/core';
import { Habilidad } from '../../interfaces/habilidad';

@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss',
})
export class HabilidadesComponent {
  habilidades: Habilidad[] = [
    { nombre: 'HTML y CSS', nivel: 80 },
    { nombre: 'TypeScript / JavaScript', nivel: 70 },
    { nombre: 'Angular', nivel: 60 },
    { nombre: 'Bootstrap', nivel: 75 },
    { nombre: 'Python', nivel: 70 },
    { nombre: 'Git y GitHub', nivel: 65 },
  ];
}