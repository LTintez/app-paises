import { Component } from '@angular/core';
import { TablaPaisesComponent } from '../../components/tabla-paises/tabla-paises.component';

@Component({
  selector: 'app-region-page',
  standalone: true,
  imports: [TablaPaisesComponent],
  templateUrl: './region-page.component.html',
  styleUrl: './region-page.component.css'
})
export class RegionPageComponent {

}
