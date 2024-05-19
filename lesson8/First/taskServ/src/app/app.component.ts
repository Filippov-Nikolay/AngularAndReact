import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyLogService } from './my-log.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [MyLogService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'taskServ';

  constructor(private MyServ: MyLogService) {
  }

  ngOnInit(): void {
    this.MyServ.Write("Method ngOnInit");   
  }
  ngOnDestroy(): void {
    this.MyServ.Write("Method ngOnDestroy");   
  }
}
