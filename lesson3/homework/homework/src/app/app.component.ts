import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessoriesForElectronicsComponent } from './accessories-for-electronics/accessories-for-electronics.component';
import { CablesAndAdaptersComponent } from './cables-and-adapters/cables-and-adapters.component';
import { ComputerComponent } from './computer/computer.component';
import { ComputerAccessoriesComponent } from './computer-accessories/computer-accessories.component';
import { GamimgComponent } from './gamimg/gamimg.component';
import { HeadphonesAndAccessoriesComponent } from './headphones-and-accessories/headphones-and-accessories.component';
import { KeyboardAndMouseComponent } from './keyboard-and-mouse/keyboard-and-mouse.component';
import { LaptopComponent } from './laptop/laptop.component';
import { NetworkEquipmentComponent } from './network-equipment/network-equipment.component';
import { OfficeEquipmentComponent } from './office-equipment/office-equipment.component';
import { ScreenComponent } from './screen/screen.component';
import { TabletComponent } from './tablet/tablet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccessoriesForElectronicsComponent, CablesAndAdaptersComponent, ComputerComponent,
            ComputerAccessoriesComponent, GamimgComponent, HeadphonesAndAccessoriesComponent, KeyboardAndMouseComponent,
            LaptopComponent, NetworkEquipmentComponent, OfficeEquipmentComponent, ScreenComponent, TabletComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homework';
}
