import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { product } from '../product.model';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: product = { 
  nome: '',
  numero_registro: '',
  email: '',
  telefone_residencial: '',
  telefone_cormecial: '',
  telefone_celular: '',
  ramal: '',
  cep: '',
  uf: '',
  estado: '',
  cidade: '',
  endereco_residencial: '',
  bloco: '',
  complemento: ''
  
  }
  
  constructor(private ProductService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  CreateProduct(): void {
    this.ProductService.create(this.product).subscribe(() =>{
    this.ProductService.showMessage('Produto criado!')
    this.router.navigate(['/products'])
    })
    
  }
  Cancel(): void {
    this.router.navigate(['/products'])
}
}
