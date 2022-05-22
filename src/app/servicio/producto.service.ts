import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'src/models/productos';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public datos: any = [];

  url:string = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.url + "/all");
  }

  save(producto:Producto):Observable<any>{
    return this.http.post(this.url + "/save",JSON.stringify(producto));
  }

  nuevoProducto(datos:any){
    return this.http.post(`${this.url}/save`, datos);
    }
}
