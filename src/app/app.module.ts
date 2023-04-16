import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreatePensamentoComponent } from './components/pensamentos/create-pensamento/create-pensamento.component';
import { FormsModule } from '@angular/forms';
import { ListPensamentoComponent } from './components/pensamentos/list-pensamento/list-pensamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreatePensamentoComponent,
    ListPensamentoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
