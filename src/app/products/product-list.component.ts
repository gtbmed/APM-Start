import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

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
    listFilter: string = 'cart';
    filteredProducts: IProduct []; // If we used 'products' to filter, we'd have to get the data from the source again after each filtering
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ];

    //Methods are normally added after properties are defined
    //Typescript does not require "function" or other keyword
    toggleImage():void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log('In OnInit');
    }
}