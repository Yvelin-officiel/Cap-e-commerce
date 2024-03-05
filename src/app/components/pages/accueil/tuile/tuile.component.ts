import { Component, Input } from '@angular/core';
import { PanierService } from '../../../../services/panier/panier.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Article } from '../../../../interfaces/Article';

@Component({
  selector: 'app-tuile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tuile.component.html',
  styleUrl: './tuile.component.css'
})
export class TuileComponent {
  @Input() article!: Article;
  quantite: number = 1;

  constructor(private panierService: PanierService) { }

  ajouterAuPanier() {
    this.panierService.ajouterAuPanier(this.article, this.quantite);
  }

  supprimerDuPanier() {
    this.panierService.supprimerDuPanier(this.article['Unique Entry ID']);
  }

  estDansLePanier(): boolean {
    // Vérifie si l'article est déjà dans le panier
    return this.panierService.recupererPanier().some(item => item.article.id === this.article['Unique Entry ID']);
  }
}
