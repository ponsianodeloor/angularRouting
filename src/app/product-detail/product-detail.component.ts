import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  private parametersUrl: Object | undefined;
  private product: string | undefined;
  private encryptId: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);

      this.parametersUrl = params;
      console.log(this.parametersUrl);

      this.product = params['product'];
      this.encryptId = params['encryptId'];

      console.log(this.product);
      console.log(this.encryptId);
    });
  }

}
