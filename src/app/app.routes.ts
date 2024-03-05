import { Routes } from '@angular/router';
import { PanierComponent } from './components/pages/panier/panier.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { AccueilComponent } from './components/pages/accueil/accueil.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'panier', component: PanierComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: '**', redirectTo: '' }
];
