import { Component ,OnInit} from '@angular/core';
import { Http, RequestOptions ,Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  inputHint = 'What needs to be done?';  //輸入框預設字串
  todos: any[] = [];  //todo陣列
  todo = '';
  filterType = 'All';
  toggleAll = false;

  private requestOptions = new RequestOptions({
    headers: new Headers({
      'authorization': 'token e29f6eea-47d3-4c2e-88ae-ee759e777a64'
    })
  });

  private dataUrl = 'https://jsonbin.org/jiaming0708/howard';
  constructor (private http: Http){
  }

  ngOnInit(){      //載入畫面先執行
    this.getTodes().subscribe(data =>{
      this.todos = data;
      console.log("555",data);
    });
  }

  getTodes(){
    return this.http.get( this.dataUrl, this.requestOptions).map(res => {
      console.log("res",res);
      return res.json();
    }).catch(error =>{

      console.log(error);
      return Observable.of<any[]>([]);

    })
  }

  saveTodos (newTodos: any[]){
    return this.http.post(this.dataUrl,newTodos ,this.requestOptions).map(res => {
      this.todos = res.json();
    }).catch(error =>{
      console.log(error);
      return Observable.of<any[]>([]);
    })
  }



  addTodo() {

    let newTodos = [...this.todos];
    newTodos.push({
      text:  this.todo,
      done : false,    //true 代表刪除
    });
    this.saveTodos(newTodos).subscribe(data => {
      this.todo = '';
    });

    // this.todos.push({
    // text:  this.todo,
    // done : false,    //true 代表刪除
    // });  //雙向繫結綁訂到todo
    // this.todo = '';  //清空輸入框
  }

  clearCompleted() {
    // console.log(this.todos);
    // this.todos = this.todos.filter(item => { return !item.done; });
    // console.log("123");
    let newTodos = this.todos.filter(item => { return !item.done; });
    this.saveTodos(newTodos).subscribe(data => { });
  }
  filterTypeChanged(filterType: string) {
    this.filterType = filterType;

  }

  toggleAllChanged(value: boolean) {

    let newTodos = [...this.todos];
    // this.todos.forEach(item => {
    //   item.done = value
    // });
    newTodos.forEach(item => {
       item.done = value
     });
     this.saveTodos(newTodos).subscribe(data => { });
  }
  updateToggleAllState(){
    console.log("22");
    this.toggleAll = this.todos.filter(item => { return !item.done; }).length === 0;
  }
  removeTodo(todo){
    let newTodos = [...this.todos];
    // this.todos.splice(this.todos.indexOf(todo),1);
    newTodos.splice(this.todos.indexOf(todo),1);
    this.saveTodos(newTodos).subscribe(data => { });
  }

}
