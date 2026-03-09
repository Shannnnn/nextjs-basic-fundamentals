import { Body, Controller, Get, Post, Param, Put, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.model';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}

    @Get()
    getProducts() {
        return this.productService.getProducts();
    }

    @Post()
    addProducts(
        @Body('title') pTitle: string, 
        @Body('description') pDesc: string,
        @Body('price') pPrice: number,
    ) {
        const returnedId = this.productService.insertProduct(pTitle, pDesc, pPrice);

        return {id: returnedId}
    }

    @Get(':id')
    getProduct(@Param('id') id: string){
        return this.productService.getProduct(id);
    }

    @Put(':id')
    updatedProduct(@Param('id') id: string, @Body() 
    productData: Product) {
        const updatedProduct = this.productService.updateProduct(id, productData);
        return updatedProduct;

    }

    @Patch(':id')
    partialUpdate(@Param('id') id:string, @Body() 
    productData: Product) {
        const updatedProduct = this.productService.
        partialUpdate(id, productData);
        return updatedProduct;
    }

    @Delete(':id')
    removeProduct(@Param('id') id: string) {
        this.productService.removeProduct(id);
        return {message: 'Product deleted successfully!'}
    }
}
