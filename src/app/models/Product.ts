export class Product{
    public id: number;
     public name: string;
     public price: number;
     public imgSrc: string;
     public categoryId: number;

     constructor(id:number, name:string, price:number, imgSrc:string, catId: number ){
        this.id = id;
        this.name = name;
        this.price = price;
        this.imgSrc = imgSrc;
        this.categoryId = catId;
     }
}