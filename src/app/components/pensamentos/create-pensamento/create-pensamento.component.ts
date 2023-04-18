import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pensamento',
  templateUrl: './create-pensamento.component.html',
  styleUrls: ['./create-pensamento.component.css'],
})
export class CreatePensamentoComponent {
  constructor(private service: PensamentoService, private router: Router) {}

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  ngOnInit() {}

  create() {
    this.service.create(this.pensamento).subscribe(() => {
      this.router.navigate(['/pensamentos']);
    });
  }

  cancelar() {
    this.router.navigate(['/pensamentos']);
  }
}
