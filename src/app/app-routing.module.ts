import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePensamentoComponent } from './components/pensamentos/create-pensamento/create-pensamento.component';
import { ListPensamentoComponent } from './components/pensamentos/list-pensamento/list-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listPensamento',
    pathMatch: 'full',
  },
  {
    path: 'createPensamento',
    component: CreatePensamentoComponent,
  },
  {
    path: 'listPensamento',
    component: ListPensamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
