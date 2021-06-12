import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: product[] = [];
  displayedColumns = ['id', 'nome', 'numero_registro', 'email','telefone_residencial', 'telefone_comercial', 'telefone_celular', 'ramal', 'cep','uf', 'estado', 'cidade', 'endereco_residencial', 'bloco', 'complemento', 'action']

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.read().subscribe(products => {
      this.products = products
    })
  }

}
