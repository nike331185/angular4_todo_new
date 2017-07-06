import { Component, OnInit , Input, Output , EventEmitter } from '@angular/core';
import { Todos } from '../../todos';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input()  todos: Todos [] ;  //app.component 才有的屬性傳入foot.component


  @Output()    clearCompleted =  new EventEmitter();           //子元件FOOT 傳事件到APP
  filterType = 'All';

   @Output()  filterTypeChanged = new EventEmitter<string>();

  constructor() { }
  ngOnInit() {

  }
  clearBtnOnClick () {
    this.clearCompleted.emit();  //按完紐往外傳
  }

  changeFilterType(filterType: string) {
    console.log("filter",filterType);
    this.filterType = filterType;
    this.filterTypeChanged.emit(filterType);

  }

}
