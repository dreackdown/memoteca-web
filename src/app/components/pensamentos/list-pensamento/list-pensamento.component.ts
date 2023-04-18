import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-list-pensamento',
  templateUrl: './list-pensamento.component.html',
  styleUrls: ['./list-pensamento.component.css'],
})
export class ListPensamentoComponent {
  pensamentos: Pensamento[] = [];

  constructor(private pensamentoService: PensamentoService) {}

  ngOnInit() {
    this.pensamentoService.findAll().subscribe((pensamentos) => {
      this.pensamentos = pensamentos;
    });
  }
}
