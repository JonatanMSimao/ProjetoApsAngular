import { Router } from '@angular/router';
import { ProductService } from './../product.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./Product-update.component.css"],
})
export class ProductUpdateComponent  implements OnInit {
constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {}

  updateProduct(): void {}
  
  Cancel(): void {
 this.router.navigate(['/products']);
}

}


