import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Products } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  
  productList: Products[] = [];
  
  private _apiService = inject(ApiService);
  private _router = inject(Router);
  
  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: Products[]) =>{ 
      console.log(data);
      
      this.productList = data
    });
  }

  navegate(id: number): void {
    this._router.navigate(['/products', id])
    
  }
}
