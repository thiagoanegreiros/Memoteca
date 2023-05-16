import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  criarPensamento(): void {
    alert('Ronaldo!')
  }

  pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'dev',
    modelo: 'modelo2'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
