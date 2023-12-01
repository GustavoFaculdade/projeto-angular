import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgModule} from '@angular/core'
import { Router } from '@angular/router';
import { ListService } from 'src/app/servicos/list.service';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  nome: string = '';
  tipo: string = '';
  idade: number = 0;

  animal: Animal = {
    id: 0,
    nome: this.nome,
    tipo: this.tipo,
    idade: this.idade
  }
  
  constructor(private listService: ListService, private router: Router) {
   }


  incluiAnimal(nome: string, tipo: string, idade: number ) {
    this.animal.nome = nome;
    this.animal.tipo = tipo;
    this.animal.idade = idade;
    this.listService.setItem(this.animal).subscribe();
    this.router.navigate(['/list']);  
  }

}