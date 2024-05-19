import { Component , OnInit } from '@angular/core';
import { LifecycleFullComponent } from '../lifecycle-full/lifecycle-full.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lifecycle-component',
  standalone: true,
  imports: [LifecycleFullComponent,CommonModule],
  templateUrl: './lifecycle-component.component.html',
  styleUrl: './lifecycle-component.component.css'
})
export class LifecycleComponentComponent implements OnInit {

  constructor() { }

  show: boolean = true;

  ngOnInit(): void {}

}
