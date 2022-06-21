import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { OAuthGuard } from './components/auth/o-auth.guard';

import { CalculaFechaComponent } from './components/calcula-fecha/calcula-fecha.component';
import { ConversionesComponent } from './components/conversiones/conversiones.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {  path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [OAuthGuard]},
  { path: 'conversiones', component: ConversionesComponent, canActivate: [OAuthGuard]},
  { path: 'calcula-fecha', component: CalculaFechaComponent, canActivate: [OAuthGuard]},
  { path: 'formulario', component: FormularioComponent, canActivate: [OAuthGuard]},
  {  path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
