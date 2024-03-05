import { Component } from '@angular/core';
import { Article } from '../../../interfaces/Article';
import { EcommerceServiceService } from '../../../services/ecommerceService.service';
import { NgFor } from '@angular/common';
import { TuileComponent } from './tuile/tuile.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [NgFor, TuileComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  articles!: Article[];

  constructor(private eCommerceService: EcommerceServiceService) { }

  ngOnInit(): void {
    this.eCommerceService.getArticles().subscribe((articles) => {
      this.articles= articles
    })
  }

}
