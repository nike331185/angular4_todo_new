import { Injectable } from '@angular/core';
import { Http, RequestOptions ,Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
   todos: any[] = [];  //todo陣列

   private requestOptions = new RequestOptions({
    headers: new Headers({
      'authorization': 'token e29f6eea-47d3-4c2e-88ae-ee759e777a64'
    })
  });

  private dataUrl = 'https://jsonbin.org/jiaming0708/howard';


  constructor(private http: Http) { }

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
      return this.todos = res.json();
    }).catch(error =>{
      console.log(error);
      return Observable.of<any[]>([]);
    })

  }
}
