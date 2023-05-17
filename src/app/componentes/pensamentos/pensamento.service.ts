import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { IPensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly apiUrl = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar() : Observable<IPensamento[]> {
    return this.http.get<IPensamento[]>(this.apiUrl)
  }

  criar(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.post<IPensamento>(this.apiUrl, pensamento)
  }

  excluir(id: number): Observable<IPensamento> {
    return this.http.delete<IPensamento>(`${this.apiUrl}/${id}`)
  }

  buscarPorId(id: number): Observable<IPensamento> {
    return this.http.get<IPensamento>(`${this.apiUrl}/${id}`)
  }

  editar(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.put<IPensamento>(`${this.apiUrl}/${pensamento.id}`, pensamento)
  }

}
