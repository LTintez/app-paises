import { Component } from '@angular/core';
import { TablaPaisesComponent } from '../../components/tabla-paises/tabla-paises.component';
import { BuscadorComponent } from '../../components/buscador/buscador.component';

@Component({
  selector: 'app-capital-page',
  standalone: true,
  imports: [TablaPaisesComponent, BuscadorComponent],
  templateUrl: './capital-page.component.html',
  styleUrl: './capital-page.component.css'
})
export class CapitalPageComponent {

}
