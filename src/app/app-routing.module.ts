import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then((m) => m.InicioPageModule),},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'producto', loadChildren: () => import('./pages/producto/producto.module').then((m) => m.ProductoPageModule),},
  { path: 'categoria', loadChildren: () => import('./pages/categoria/categoria.module').then((m) => m.CategoriaPageModule),},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
