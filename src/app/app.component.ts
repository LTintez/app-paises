import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TablaPaisesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-paises';
}
