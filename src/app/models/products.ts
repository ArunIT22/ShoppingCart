export class Products {
  id: number = 0;
  name: string = '';
  price: number = 0;
  color: string = '';
  isInStock: string = '';
  image: string = '';
}

export class ProductDetails {

  private productList: Products[] = [
    { id: 1, name: 'Amazfit Watch', price: 5999, color: 'Black', isInStock: 'Available', image: '/assets/products/Amazfit.jpg' },
    { id: 2, name: 'Apple Watch', price: 45999, color: 'Grey', isInStock: 'Available', image: '/assets/products/AppleWatch.jpg' },
    { id: 3, name: 'Boat Watch', price: 3999, color: 'Blue', isInStock: 'Not Available', image: '/assets/products/BoatWave.jpg' },
    { id: 4, name: 'Apple iPad Air', price: 44999, color: 'Grey', isInStock: 'Available', image: '/assets/products/iPAD.jpg' },
    { id: 5, name: 'Nikon 5200', price: 25599, color: 'Black', isInStock: 'Available', image: '/assets/products/NikonCamera.jpg' },
    { id: 6, name: 'Oneplus TV 43 inch', price: 29999, color: 'Black', isInStock: 'Not Available', image: '/assets/products/OneplusTV.jpg' },
    { id: 7, name: 'Samsung 24" Monitor', price: 12499, color: 'Black', isInStock: 'Available', image: '/assets/products/SamsungMonitor.jpg' }
  ];

  getProductList(): Products[] {
    return this.productList;
  }

}
