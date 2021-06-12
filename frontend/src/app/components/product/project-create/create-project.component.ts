import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { project } from './project.model';
import { ProjectService } from './project.service';




@Component({
  selector: 'app-product-create',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  project: project = {
  codigo: '',
  nome_projeto: '',
  data_inicio: '',
  data_prevista_termino: '',
  data_termino_real: '',
  status: '',
  numero_horas_prevista: '',
  numero_horas_reais: ''
  
  }
  
  constructor(private ProjectService: ProjectService,
    private router: Router) { }

  ngOnInit(): void {
  }

  CreateProduct(): void {
    this.ProjectService.create(this.project).subscribe(() =>{
    this.ProjectService.showMessage('Projeto criado!')
    this.router.navigate(['/products'])
    })
    
  }
  Cancel(): void {
    this.router.navigate(['/products'])
}
}
