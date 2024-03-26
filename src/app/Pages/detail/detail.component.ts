import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Products } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  loading: boolean = true;
  public product?: Products;
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);
  
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProduct(params['id']).subscribe((data: Products) => {
        console.log(data);
        this.product = data;
        this.loading = false;
      })
    })
  }
}
