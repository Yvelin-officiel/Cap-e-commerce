import { Injectable } from '@angular/core';
import { Article } from '../../interfaces/Article';
import { ArticlePanier } from '../../interfaces/ArticlePanier';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier: { article: ArticlePanier, quantite: number }[] = [];

  ajouterAuPanier(article: Article, quantite: number) {
    const index = this.panier.findIndex(item => item.article.id === article['Unique Entry ID']);

    const articlePanier: ArticlePanier = {
      id: article['Unique Entry ID'],
      name: article.Name,
      quantity: quantite,
      price: parseFloat(article.Buy),
      totalPrice: parseFloat(article.Buy) * quantite
    };

    if (index === -1) {
      // Cas 1 : Créé une entrée dans le panier avec la quantité choisie 
      this.panier.push({ article: articlePanier, quantite });
    } else {
      // Cas 2 : Si une entrée existe déjà dans le panier, ajoute la quantité choisie en plus de l'existante
      this.panier[index].quantite += quantite;
    }
    this.calculerPrixTotal();
  }

  recupererPanier() {
    return this.panier;
  }

  supprimerDuPanier(id:string ) {
    const index = this.panier.findIndex(item => item.article.id === id);

    if (index !== -1) {
      // Supprime l'entrée correspondante du panier
      this.panier.splice(index, 1);
    }
  }

  viderPanier() {
    this.panier = [];
  }

  calculerPrixTotal(): number {
    return this.panier.reduce((total, article) => total + article.article.totalPrice, 0);
  }

}
