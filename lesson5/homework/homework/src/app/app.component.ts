import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    transport: any[] = [
        {
            typeTransport: 'Car',
            model: 'БелАЗ-75710',
            weight: 390.5, // т
            width: 9.87, // м
            height: 8.26, // м
            length: 20.6 // м
        },
        {
            typeTransport: 'Plane',
            model: 'АН-225 «Мрiя»',
            weight: 285,
            width: 88,
            height: 18,
            length: 84
        },
        {
            typeTransport: 'Ship',
            model: 'Icon of the Seas',
            weight: 250.8,
            width: 48,
            height: 72,
            length: 365
        },
    ];

    index: number = 0;

    showCar(): void { this.index = 0; }
    showPlane(): void { this.index = 1; }
    showShip(): void { this.index = 2; }
}
