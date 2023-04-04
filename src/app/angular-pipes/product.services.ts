import { NewProduct } from "./product";

export class NewProductService {
  productList: NewProduct[] = [
    { id: 101, name: 'Samsung galaxy s23', category: 'Mobile Phone', price: 102999.99, discount: 10, addedDate: new Date(2023, 1, 20) },
    { id: 102, name: 'iPhone 14 pro', category: 'Mobile Phone', price: 124999, discount: 10, addedDate: new Date(2023, 1, 30) },
    { id: 103, name: 'Boat Wave', category: 'Smart Watch', price: 5799, discount: 55, addedDate: new Date(2023, 2, 12) },
    { id: 104, name: 'Samsung Galaxy watch 4', category: 'Smart Watch', price: 44599.79, discount: 20, addedDate: new Date(2022, 6, 18) },
    { id: 105, name: 'Realme Buds air', category: 'TWS', price: 4999, discount: 20, addedDate: new Date(2023, 1, 20) },
    { id: 106, name: 'JBL Tune 430', category: 'TWS', price: 7999, discount: 26, addedDate: new Date(2022, 6, 18) },
    { id: 107, name: 'Xiaomi Pad 5', category: 'Tablet', price: 39999.99, discount: 28, addedDate: new Date(2022, 7, 12) },
    { id: 108, name: 'Oppo Pad air', category: 'Tablet', price: 29999.99, discount: 42, addedDate: new Date(2022, 10, 5) },
  ];

  getAllProducts(): NewProduct[] {
    return this.productList;
  }
}

