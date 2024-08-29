import { Routes } from '@angular/router';
import { PaisPageComponent } from './pages/pais-page/pais-page.component';
import { RegionPageComponent } from './pages/region-page/region-page.component';
import { CapitalPageComponent } from './pages/capital-page/capital-page.component';

export const routes: Routes = [
    { path: '', component: PaisPageComponent },
    { path: 'region', component: RegionPageComponent },
    { path: 'capital', component: CapitalPageComponent },
];
