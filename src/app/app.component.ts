import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { RegionPageComponent } from './pages/region-page/region-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-paises';
}
