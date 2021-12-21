import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //o observable é um callback, ou seja, espera algo. E a gora que ele recebe ele avisa.

import { Produto } from './produto';

@Injectable()
export class ProdutoService {
  protected urlService: string = 'http://localhost:3000/';

  //injeção de dependencia
  constructor(private http: HttpClient) {}

  //método para obter a lista de produtos
  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.urlService + 'produtos');
  }
}
