import { Component, OnInit } from '@angular/core';
import { ArticlePanier } from '../../../interfaces/ArticlePanier';
import { PanierService } from '../../../services/panier/panier.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-panier',
  standalone: true,
  imports:[FormsModule, CommonModule],
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  articlesPanier: { article: ArticlePanier, quantite: number }[] = [];
  value: number = 0;
  prixTotalPanier: number = 0;

  constructor(private panierService: PanierService) {}

  ngOnInit() {
    this.articlesPanier = this.panierService.recupererPanier();
    this.prixTotalDuPanier
  }

  modifierQuantite(article: { article: ArticlePanier, quantite: number }, nouvelleQuantite: number) {
    article.quantite += nouvelleQuantite;
    article.article.totalPrice = article.quantite * article.article.price;
  }

  supprimerArticleDuPanier(article: { article: ArticlePanier, quantite: number }) {
    this.panierService.supprimerDuPanier(article.article.id);
    this.articlesPanier = this.panierService.recupererPanier();
  }

  viderPanier() {
    this.panierService.viderPanier();
    this.articlesPanier = [];
  }

  prixTotalDuPanier(): void{
    this.prixTotalPanier = this.panierService.calculerPrixTotal();
  }
}
