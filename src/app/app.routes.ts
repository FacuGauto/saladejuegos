import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { QuiensoyComponent } from './componentes/quiensoy/quiensoy.component';
import { LoginComponent } from './componentes/login/login.component';
import { PagenotfoundComponent } from './componentes/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: QuiensoyComponent },
    { path: '**', component: PagenotfoundComponent }
];
