import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { PanierComponent } from './components/pages/panier/panier.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AccueilComponent, PanierComponent, CheckoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerbeaud_yvelin_BA3';
}
