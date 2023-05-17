import { Component, Input, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  criarPensamento(): void {
    if (this.pensamento.id && this.pensamento.id > 0)
      this.service.editar(this.pensamento).subscribe(() => this.router.navigate(['/listar-pensamentos']))
    else
      this.service.criar(this.pensamento).subscribe(() => this.router.navigate(['/listar-pensamentos']))
  }

  @Input() pensamento: IPensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.service.buscarPorId(parseInt(id)).subscribe((pensamento) => this.pensamento = pensamento)
    }
  }

}
