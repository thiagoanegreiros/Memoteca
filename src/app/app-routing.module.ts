import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';

const routes: Routes = [
  {
    path: 'form-pensamento/:id',
    component: CriarPensamentoComponent
  },
  {
    path: 'listar-pensamentos',
    component: ListarPensamentoComponent
  },
  {
    path: 'pensamentos/excluir-pensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'listar-pensamentos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
