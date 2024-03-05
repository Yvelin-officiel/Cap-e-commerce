// checkout.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PanierService } from '../../../services/panier/panier.service';
import { EcommerceServiceService } from '../../../services/ecommerceService.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true, 
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  checkoutForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private panierService: PanierService,
    private ecommerceService: EcommerceServiceService,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      adress: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      city: ['', Validators.required],
      card: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      cardDate: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)]],
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      const panier = this.panierService.recupererPanier();
      const user = this.checkoutForm.value;

      this.ecommerceService.envoyerCommande(panier.map(article => article.article), user).subscribe({
        next: () => {
          this.panierService.viderPanier();
          this.router.navigate(['/accueil']);
          alert('Commande validée avec succès!');
        },
        error : (error: any) => {
          alert('Erreur lors de la validation de la commande. Veuillez réessayer.'); // Message d'erreur
          console.log(error.status, error.message);

        }
      });
    } else {
      // Le formulaire n'est pas valide, gérer en conséquence
      alert(`Le formulaire n'es pas valide`)
    }
  }

  annulerCommande() {
    this.panierService.viderPanier();
    this.router.navigate(['/accueil']); // Rediriger vers l'accueil
    alert('Commande annulée.'); // Message d'annulation
  }
}
