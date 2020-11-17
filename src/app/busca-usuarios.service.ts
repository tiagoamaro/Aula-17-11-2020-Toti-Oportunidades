import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscaUsuariosService {

  constructor(private http: HttpClient) { }

  pegaTodos() {
    // Carregando...até quando? Chamada para uma API externa!
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
