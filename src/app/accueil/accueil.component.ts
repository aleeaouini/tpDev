import {ChangeDetectionStrategy, Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from '../header/header.component';
import { AppRoutingModule } from '../app-routing.module';
@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [MatCardModule,HeaderComponent,AppRoutingModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccueilComponent {

}
