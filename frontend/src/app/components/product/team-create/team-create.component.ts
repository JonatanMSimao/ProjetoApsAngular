import { teamService } from './team.service';
import { team } from './team.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'



@Component({
  selector: 'app-product-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  team: team = { 
  registro:'',  
  nome_equipes: '',
  integrantes: '',
  numero_recurso: ''
  
  }
  
  constructor(private teamService: teamService,
    private router: Router) { }

  ngOnInit(): void {
  }

  CreateProduct(): void {
    this.teamService.create(this.team).subscribe(() =>{
    this.teamService.showMessage('Equipe criada!')
    this.router.navigate(['/products'])
    })
    
  }
  Cancel(): void {
    this.router.navigate(['/products'])
}
}
