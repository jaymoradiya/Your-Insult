import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InsultModel } from './model/InsultModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
[x: string]: any;
 
  constructor(private http: HttpClient){}

  quote: string = "";

  ngOnInit(): void {
    this.loadInsults();
  }


  loadInsults(){
    this.http.get<InsultModel>("https://insult.mattbas.org/api/en/insult.json")
    .subscribe(val  => {
      console.log(val);
     this.quote = val.insult;
   });
  }

}
