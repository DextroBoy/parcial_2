import { Component, computed, signal } from '@angular/core';
import { ItemLibre } from '../../interfaces/item-libre';

@Component({
  selector: 'app-tema-libre',
  imports: [],
  templateUrl: './tema-libre.page.html',
  styleUrl: './tema-libre.page.scss',
})
export class TemaLibrePage {
  readonly titulo = 'Mis videojuegos favoritos';
  readonly estrellas = [1, 2, 3, 4, 5];

  items: ItemLibre[] = [
    {
      nombre: 'Minecraft',
      categoria: 'Sandbox',
      descripcion: 'Mundo abierto de bloques para construir, explorar y sobrevivir.',
      anio: 2011,
      calificacion: 5,
    },
    {
      nombre: 'The Legend of Zelda: Breath of the Wild',
      categoria: 'Aventura',
      descripcion: 'Exploración libre de Hyrule con física y sistemas que reaccionan entre sí.',
      anio: 2017,
      calificacion: 5,
    },
    {
      nombre: 'Hollow Knight',
      categoria: 'Aventura',
      descripcion: 'Plataformas y combate en un reino subterráneo lleno de secretos.',
      anio: 2017,
      calificacion: 4,
    },
    {
      nombre: 'Age of Empires II',
      categoria: 'Estrategia',
      descripcion: 'Estrategia en tiempo real: economía, ejércitos y evolución de civilizaciones.',
      anio: 1999,
      calificacion: 4,
    },
    {
      nombre: 'EA Sports FC',
      categoria: 'Deportes',
      descripcion: 'Simulador de fútbol con equipos, ligas y modos en línea.',
      anio: 2023,
      calificacion: 3,
    },
    {
      nombre: 'Celeste',
      categoria: 'Plataformas',
      descripcion: 'Plataformas de precisión con una historia sobre superar obstáculos.',
      anio: 2018,
      calificacion: 5,
    },
  ];

  categorias = ['Todas', ...new Set(this.items.map((i) => i.categoria))];

  categoriaActiva = signal('Todas');

  itemsFiltrados = computed(() => {
    const c = this.categoriaActiva();
    return c === 'Todas' ? this.items : this.items.filter((i) => i.categoria === c);
  });

  promedio = computed(() => {
    const lista = this.itemsFiltrados();
    if (lista.length === 0) return 0;
    const suma = lista.reduce((acc, i) => acc + i.calificacion, 0);
    return Math.round((suma / lista.length) * 10) / 10;
  });

  seleccionar(categoria: string): void {
    this.categoriaActiva.set(categoria);
  }
}