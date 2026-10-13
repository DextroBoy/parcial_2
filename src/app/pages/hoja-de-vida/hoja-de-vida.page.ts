import { Component } from '@angular/core';
import { PerfilComponent } from '../../components/perfil/perfil.component';
import { ContactoComponent } from '../../components/contacto/contacto.component';
import { FormacionComponent } from '../../components/formacion/formacion.component';
import { HabilidadesComponent } from '../../components/habilidades/habilidades.component';
import { ExperienciaComponent } from '../../components/experiencia/experiencia.component'; 

@Component({
  selector: 'app-hoja-de-vida',
  imports: [
    PerfilComponent,
    ContactoComponent,
    FormacionComponent,
    HabilidadesComponent,
    ExperienciaComponent
  ],
  templateUrl: './hoja-de-vida.page.html',
  styleUrl: './hoja-de-vida.page.scss',
})
export class HojaDeVidaPage {

}
