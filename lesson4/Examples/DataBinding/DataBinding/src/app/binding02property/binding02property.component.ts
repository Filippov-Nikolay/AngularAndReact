import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding02property',
  templateUrl: './binding02property.component.html',
  styleUrls: ['./binding02property.component.css'],
  standalone: true
})
export class Binding02PropertyComponent implements OnInit {
  constructor() { }

  MyImage: string = 'assets/Step.jpg';
  MyImageWidth: number = 300;

  CBSImage: string = 'assets/2.png';
  CBSImageWidth: number = 250;

  //-----------------------------------------------

  flag = false;

  ngOnInit() {
  }

}
