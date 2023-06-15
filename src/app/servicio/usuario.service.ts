import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private baseUrl = 'http://localhost:8080/api/';  

  constructor(private http:HttpClient) { }

  getAllUsuario(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'listUsuario');  
  }  
  
  createUsuario(usuario: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'createUsuario', usuario);  
  }  
  
  deleteUsuario(id: Number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}deleteUsuario/${id}`, { responseType: 'text' });  
  }  
  
  getUsuario(id: Number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/getUsuario/${id}`);  
  }  
  
  updateUsuario(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/updateUsuario/${id}`, value);  
  }  
}
