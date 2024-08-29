import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { RegionPageComponent } from './pages/region-page/region-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RegionPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-paises';
}
