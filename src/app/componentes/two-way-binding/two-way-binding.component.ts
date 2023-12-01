import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgModule} from '@angular/core'

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  @Input()
  nome: String = '';

}
