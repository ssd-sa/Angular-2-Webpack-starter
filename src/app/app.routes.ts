import { Routes, RouterModule } from '@angular/router';
import * as Components from './components';

export const ROUTES: Routes = [
    { path: '',      component: Components.HomeComponent },
    { path: 'home',  component: Components.HomeComponent },
];
