import { Routes } from '@angular/router';
import { Home } from './components/pages/home';
import { Sobre } from './components/pages/sobre';
import { Projetos } from './components/pages/projetos';
import { Contato } from './components/pages/contato';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'sobre', component: Sobre },
    { path: 'projetos', component: Projetos },
    { path: 'contato', component: Contato },
];
