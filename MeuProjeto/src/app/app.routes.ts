import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //quando não chamar nada ele redireciona para home
  { path: 'home', component: HomeComponent }, //eu quero apontar para home
  { path: 'contato', component: ContatoComponent }, //eu quero apontar para home
  { path: 'sobre', component: SobreComponent }, //eu quero apontar para home
  { path: 'feature-data-binding', component: DataBindingComponent },
  { path: 'produtos', component: ListarProdutosComponent },
];
