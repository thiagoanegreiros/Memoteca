import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      id: 1,
      conteudo: 'Aprendendo Angular',
      autoria: 'dev',
      modelo: 'modelo2'
    },
    {
      id: 2,
      conteudo: 'hahaha haha',
      autoria: 'hehehe he',
      modelo: 'modelo1'
    },
    {
      id: 3,
      conteudo: 'Aprende sjk dkjas dkjsa dkj sakdj askjd sakdj ndo Angular v2 ksaj fdkjhasb fkjas fkjsahfkajsfka sjfkjas fkjas fkj asfkj asfkj askjf askjf askj fkasj fkjsa fkjsa fkjas fkjas fkjas fkj asfkj askjf sakjfd askjf kjsa fkjas fkjas fkjas fkjas fkjas fkj sakjf askjf askj faskj fkjas fkjsa fkjas fkjas ',
      autoria: 'dev 02',
      modelo: 'modelo3'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
