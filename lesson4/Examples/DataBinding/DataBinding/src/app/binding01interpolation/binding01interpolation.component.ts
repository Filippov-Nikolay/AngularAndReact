import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding01interpolation',
  standalone: true,
  templateUrl: './binding01interpolation.component.html'
})
export class Binding01InterpolationComponent implements OnInit {
  propertyOne  = 'Hello'; // propertyOne: string  = 'Hello';
  propertyTwo  = 111;
  propertyBool = true;
  propertyObj1  = {};
  propertyObj2  = {
    prop1: 'some value'
  };

  emptyProp:number=0;
  notEmptyProp;

  constructor() {
    this.notEmptyProp = 'not empty';
    this.startInterval();
  }

  returnStringMethod(){
    return 'hello some string text';
  }

  counter: number = 0;
  startInterval() {
    setInterval(()=>{
      this.counter++;
    }, 1)
  }

  Age: number = 12;
  GetAge() {
    return this.Age;
  }

  ngOnInit() {
  }
}
