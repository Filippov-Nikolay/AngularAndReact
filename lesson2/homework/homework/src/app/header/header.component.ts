import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, NavigationComponent, SocialsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
