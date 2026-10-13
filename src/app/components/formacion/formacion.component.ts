import { Component } from '@angular/core';
import { Educacion } from '../../interfaces/educacion';

@Component({
  selector: 'app-formacion',
  imports: [],
  templateUrl: './formacion.component.html',
  styleUrl: './formacion.component.scss',
})
export class FormacionComponent {
  estudios: Educacion[] = [
    {
      institucion: 'Unidad Central del Valle del Cauca (UCEVA)',
      titulo: 'Ingeniería (en curso)',
      periodo: '2023 - actualidad',
    },
    {
      institucion: 'I.E Juan Maria Cespedes',
      titulo: 'Bachiller académico',
      periodo: '2017 - 2022',
    },
  ];
}