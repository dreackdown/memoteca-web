import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-pensamento',
  templateUrl: './delete-pensamento.component.html',
  styleUrls: ['./delete-pensamento.component.css'],
})
export class DeletePensamentoComponent {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pensamentoService.findById(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.pensamentoService.delete(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/pensamentos']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/pensamentos']);
  }
}
