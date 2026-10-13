import { Component } from '@angular/core';
import { Contacto } from '../../interfaces/contacto';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss',
})
export class ContactoComponent {
  datos: Contacto[] = [
    { etiqueta: 'Correo', valor: 'andres.navarro01@uceva.edu.co', enlace: 'mailto:andres.navarro01@uceva.edu.co' },
    { etiqueta: 'Teléfono', valor: '300 000 0000', enlace: 'tel:+573000000000' },
    { etiqueta: 'GitHub', valor: 'github.com/DextroBoy', enlace: 'https://github.com/DextroBoy' },
    { etiqueta: 'Universidad', valor: 'UCEVA' },
  ];
}