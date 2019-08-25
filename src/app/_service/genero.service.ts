import { Genero } from './../_model/genero';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  url: string = `${environment.HOST}/generos`;
  constructor(
    private http: HttpClient
  ) { }

  listar(){
    return this.http.get<Genero[]>(this.url);
  }

}
