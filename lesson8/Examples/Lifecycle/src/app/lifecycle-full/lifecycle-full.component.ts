import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecycle-full',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifecycle-full.component.html',
  styleUrl: './lifecycle-full.component.css'
})
export class LifecycleFullComponent implements OnInit,
                                              DoCheck,
                                              AfterContentInit,
                                              AfterContentChecked,
                                              AfterViewInit,
                                              AfterViewChecked,
                                              OnDestroy
                                              {
  constructor() {
    console.log("LifecycleFullComponent constructor ");
  }
  counter = 0;
  @Input() val:any;

  ngOnChanges() {
    this.log("ngOnChanges");
    console.log(this.val);
    console.log('===========');
  }

  ngOnInit() {
    this.log("ngOnInit");
  }

  ngDoCheck() {
    this.log("ngDoCheck");
  }

  ngAfterContentInit() {
    this.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    this.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    this.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    this.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    this.log("ngOnDestroy");
    console.log("___________");
  }

  clicked() {
    this.log("clicked method");
    console.log("--------------");
  }

  private log(msg: string) {
    console.log(this.counter + ') ' + msg)
    this.counter++
  }

}
