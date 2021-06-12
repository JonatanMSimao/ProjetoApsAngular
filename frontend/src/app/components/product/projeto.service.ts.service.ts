
import { projeto } from './projeto.model';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top"
  })
  }

  create(projeto: projeto): Observable<projeto> {
    return this.http.post<projeto>(this.baseUrl, projeto)
  }
  read(): Observable<projeto[]> {
    return this.http.get<projeto[]>(this.baseUrl)
  }

  readById(id: string): Observable<projeto> {
    const url = `${this.baseUrl}/${id}`
   return this.http.get<projeto>(url)
  }

  update(projeto: projeto): Observable<projeto> {
    const url = `${this.baseUrl}/${projeto.id}`
    return this.http.put<projeto>(url, projeto)
  }
}

