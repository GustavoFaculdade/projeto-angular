import { Component, EventEmitter, Output } from '@angular/core';
import { EmitterComponent } from '../emitter/emitter.component';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()


  handleClick() {
    this.changeNumber.emit()
}

}
