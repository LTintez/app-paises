import { Component } from '@angular/core';
import { TablaPaisesComponent } from '../../components/tabla-paises/tabla-paises.component';

@Component({
  selector: 'app-pais-page',
  standalone: true,
  imports: [TablaPaisesComponent],
  templateUrl: './pais-page.component.html',
  styleUrl: './pais-page.component.css'
})
export class PaisPageComponent {

}
