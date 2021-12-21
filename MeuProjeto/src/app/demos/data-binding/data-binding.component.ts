import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {
  //criando uma variável
  public contadorClique: number = 1;
  public urlImagem: string = '';
  // 'https://angular.io/assets/images/logos/angular/angular.svg'; //aceita o valor de referencia da imagem
  public nome: string = '';

  adicionarClique() {
    this.contadorClique++;
  }

  keyUp(event: any) {
    this.nome = event.target.value; //o targe é o bjeto que está sendo referenciado e o value é o valor dele
  }
}
