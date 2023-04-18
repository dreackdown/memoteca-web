import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreatePensamentoComponent } from './components/pensamentos/create-pensamento/create-pensamento.component';
import { FormsModule } from '@angular/forms';
import { ListPensamentoComponent } from './components/pensamentos/list-pensamento/list-pensamento.component';
import { PensamentoComponent } from './components/pensamentos/pensamento/pensamento.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePensamentoComponent } from './components/pensamentos/update-pensamento/update-pensamento.component';
import { DeletePensamentoComponent } from './components/pensamentos/delete-pensamento/delete-pensamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreatePensamentoComponent,
    ListPensamentoComponent,
    PensamentoComponent,
    UpdatePensamentoComponent,
    DeletePensamentoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
