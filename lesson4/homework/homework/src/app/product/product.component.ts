import {  Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [NgFor, NgIf],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {
    public constructor() {}

    @Input() imgSrc: string = '';
    @Input() imgAlt: string = '';
    @Input() title: string = '';
    @Input() isCenter: boolean = false;
    @Input() addInfo: string[] = [];
    
    ngOnInit() {
    }
}