import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-pensamento',
  templateUrl: './update-pensamento.component.html',
  styleUrls: ['./update-pensamento.component.css'],
})
export class UpdatePensamentoComponent {
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

  update() {
    this.pensamentoService.update(this.pensamento).subscribe(() => {
      this.router.navigate(['/pensamentos']);
    });
  }

  cancelar() {
    this.router.navigate(['/pensamentos']);
  }
}
