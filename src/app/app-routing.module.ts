import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './componente/crear-usuario/crear-usuario.component';
import { HomeComponent } from './componente/home/home.component';
import { ListarUsuarioComponent } from './componente/listar-usuario/listar-usuario.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listarUsuario', component: ListarUsuarioComponent},
  {path: 'crearUsuario', component: CrearUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
