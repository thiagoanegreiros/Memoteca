import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: IPensamento = {
    autoria: '',
    conteudo: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0')
    this.service.buscarPorId(id).subscribe((pensamento) => this.pensamento = pensamento)
  }

  excluirPensamento() {
    if (this.pensamento.id)
      this.service.excluir(this.pensamento.id).subscribe(() => this.router.navigate(['/listar-pensamentos']))
  }

  cancelar() {
    this.router.navigate(['/listar-pensamentos'])
  }

}
