import { Component } from '@angular/core';
import { TablaPaisesComponent } from '../../components/tabla-paises/tabla-paises.component';
import { BuscadorComponent } from '../../components/buscador/buscador.component';

@Component({
  selector: 'app-pais-page',
  standalone: true,
  imports: [TablaPaisesComponent, BuscadorComponent],
  templateUrl: './pais-page.component.html',
  styleUrl: './pais-page.component.css'
})
export class PaisPageComponent {

}
