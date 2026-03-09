export class Product {
    constructor(
        public id: string,
        public title: string | null,
        public description: string | null,
        public price: number | null,
    ) {}
}