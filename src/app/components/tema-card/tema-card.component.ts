import { Component, computed, input } from '@angular/core';
import { Tema } from '../../interfaces/tema';

@Component({
  selector: 'app-tema-card',
  imports: [],
  templateUrl: './tema-card.component.html',
  styleUrl: './tema-card.component.scss',
})
export class TemaCardComponent {
  readonly tema = input.required<Tema>();

  readonly colorTipo = computed(() => {
    switch (this.tema().tipo) {
      case 'concepto':
        return 'primary';
      case 'proyecto':
        return 'success';
      case 'actividad':
        return 'warning';
      default:
        return 'secondary';
    }
  });
}