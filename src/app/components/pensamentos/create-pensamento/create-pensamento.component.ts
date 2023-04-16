import { Component } from '@angular/core';

@Component({
  selector: 'app-create-pensamento',
  templateUrl: './create-pensamento.component.html',
  styleUrls: ['./create-pensamento.component.css'],
})
export class CreatePensamentoComponent {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  createPensamento() {
    console.log(this.pensamento);
  }

  cancelar() {
    console.log('cancelado');
  }
}
