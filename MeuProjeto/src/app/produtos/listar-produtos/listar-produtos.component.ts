import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
})
export class ListarProdutosComponent implements OnInit {
  constructor(private produtoService: ProdutoService) {}

  public produtos: Produto[]; //coleção de proutos

  ngOnInit() {
    this.produtoService.obterProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
        console.log(produtos);
      },
      //tratamento de erro
      (error) => {
        return console.log(error);
      }
    );
  }
}
