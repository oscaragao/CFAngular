import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/Categoria';

const httOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

url = 'api/Categorias';
//pode ser string

  constructor(private http: HttpClient) { }
  
  PegarTodos(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url);
   }


   PegarCategoriaPeloId(categoriaId:number): Observable<Categoria>{
    const apiUrl = `${this.url}/${categoriaId}`;
    return this.http.get<Categoria>(apiUrl);
   }

   //any em tempo execucao = incremento
   NovaCategoria(categoria: Categoria) : Observable<any>{
     return this.http.post<Categoria>(this.url, categoria, httOptions);
   }

   AtualizarCategoria(categoriaId: number, categoria:Categoria): Observable<any>{
    const apiUrl = `${this.url}/${categoriaId}`;
    return this.http.put<Categoria>(apiUrl, categoria, httOptions);
   }

   ExcluirCategoria(categoriaId:number): Observable<any>{
    const apiUrl = `${this.url}/${categoriaId}`;
    return this.http.delete<number>(apiUrl, httOptions);
   }

}
