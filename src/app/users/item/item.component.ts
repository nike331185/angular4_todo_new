import { Todos } from './../todos';
import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()  item: Todos ;
  constructor() { }

  @Output() updateToggleAllState = new EventEmitter();
  @Output() removeTodo  = new EventEmitter<Todos>();
  ngOnInit() {
  }
  updateState(){
    this.updateToggleAllState.emit();
  }

  remove(todos : Todos){
    this.removeTodo.emit(todos);
  }

}
