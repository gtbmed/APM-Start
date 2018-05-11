import { Component } from "@angular/core";
import { ProductService } from "./products/product.service";

@Component ({
  selector: 'pm-root',
  template: ``,
  providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = 'Darth Batman Product Management';
}