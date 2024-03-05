import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/IArticle';

@Injectable({
  providedIn: 'root'
})
export class EcommerceServiceService {
  private baseUrl = 'https://www.eleguen.ovh/api/v1/articles'

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseUrl}`)
  }

  private apiUrl = 'https://www.eleguen.ovh/api/v1/purchase';
  
  envoyerCommande(panier: any[], user: any): Observable<any> {
    const body = JSON.stringify({ panier, user });
    console.log(body);
    
    return this.http.post(this.apiUrl, body);
  }
}
