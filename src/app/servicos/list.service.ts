import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/comments'
  constructor(private http: HttpClient) { }
  
  getAll():Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number):Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
  remove(id: number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }
  setItem(animal: Animal):Observable<Animal> {
    return this.http.post<Animal>(this.apiUrl,animal);
  }
  // setContato(contato: Contato) {
  //   return this.http.post<Contato>(this.apiUrlContatos,contato);    
  // }
}
