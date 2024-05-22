import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-http-request',
  standalone:true,
  imports: [HttpClientModule],
  templateUrl: './http-request04.component.html'
})
export class HttpRequest04Component implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res=>{console.log(res)});
 }

}
