import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component ({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: 50;
    imageMargin: 2;
    showImage: boolean = false;
    errorMessage: string;
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products; // JS conditional to consider if filtered list is empty and what to do in each case
    }
    
    filteredProducts: IProduct []; // If we used 'products' to filter, we'd have to get the data from the source again after each filtering
    products: IProduct[] = [];

    constructor(private _productService: ProductService) { // set defaults for the page
    
    }

    performFilter(filterBy: string): IProduct [] {
        filterBy = filterBy.toLocaleLowerCase(); // change to lowercase to everything compared is lowercase
        return this.products.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    //Methods are normally added after properties are defined
    //Typescript does not require "function" or other keyword
    toggleImage():void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error);
    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}