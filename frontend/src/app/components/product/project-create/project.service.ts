import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';


import { Injectable } from '@angular/core';
import { project } from './project.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top"
  })
  }

  create(project: project): Observable<project> {
    return this.http.post<project>(this.baseUrl, project)
  }
  read(): Observable<project[]> {
    return this.http.get<project[]>(this.baseUrl)
  }

  readById(id: string): Observable<project> {
    const url = `${this.baseUrl}/${id}`
   return this.http.get<project>(url)
  }

  update(project: project): Observable<project> {
    const url = `${this.baseUrl}/${project.id}`
    return this.http.put<project>(url, project)
  }
}

