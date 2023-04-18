import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePensamentoComponent } from './components/pensamentos/create-pensamento/create-pensamento.component';
import { ListPensamentoComponent } from './components/pensamentos/list-pensamento/list-pensamento.component';
import { DeletePensamentoComponent } from './components/pensamentos/delete-pensamento/delete-pensamento.component';
import { UpdatePensamentoComponent } from './components/pensamentos/update-pensamento/update-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pensamentos',
    pathMatch: 'full',
  },
  {
    path: 'create',
    component: CreatePensamentoComponent,
  },
  {
    path: 'pensamentos',
    component: ListPensamentoComponent,
  },
  {
    path: 'pensamentos/delete/:id',
    component: DeletePensamentoComponent,
  },
  {
    path: 'pensamentos/update/:id',
    component: UpdatePensamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
