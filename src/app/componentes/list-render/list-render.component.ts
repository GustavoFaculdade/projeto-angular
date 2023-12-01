import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/servicos/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = []

  //   {nome: 'Larry', tipo: 'cachorro', idade: 5},
  //   {nome: 'Miau', tipo: 'gato',  idade: 2},
  //   {nome: 'Anita', tipo: 'cachorro',  idade: 12},
  //   {nome: 'Litajara', tipo: 'cavalo',  idade: 7},
  
idadeAnimal: string =''

  mostraIdade(animal: Animal) {
    this.idadeAnimal = `${animal.nome}(${animal.tipo} tem ${animal.idade} anos!)`
  }
  constructor(private listService: ListService){
    this.getAnimais()
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal');
    this.animals = this.animals.filter((a) => animal.nome !== a.nome)
    this.listService.remove(animal.id).subscribe()}
    
  getAnimais() {
    this.listService.getAll().subscribe((animais) => (this.animals = animais))
  }
}
