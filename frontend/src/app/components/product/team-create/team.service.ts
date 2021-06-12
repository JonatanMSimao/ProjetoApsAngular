import { team } from './team.model';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class teamService {
  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top"
  })
  }

  create(team: team): Observable<team> {
    return this.http.post<team>(this.baseUrl, team)
  }
  read(): Observable<team[]> {
    return this.http.get<team[]>(this.baseUrl)
  }

  readById(id: string): Observable<team> {
    const url = `${this.baseUrl}/${id}`
   return this.http.get<team>(url)
  }

  update(team: team): Observable<team> {
    const url = `${this.baseUrl}/${team.id}`
    return this.http.put<team>(url, team)
  }
}

