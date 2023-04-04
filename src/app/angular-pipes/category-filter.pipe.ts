import { Pipe, PipeTransform } from '@angular/core';
import { NewProduct } from './product';

@Pipe({
  name: 'categoryFilter',
})

export class CategoryFilterPipe implements PipeTransform {

  transform(products: NewProduct[], filterText: string) {
    if (filterText === '' || products.length == 0) {
      return products;
    }
    else {
      return products.filter((prd) => {
        //return prd.category.toLocaleLowerCase() === filterText.toLocaleLowerCase()
        return prd.category.toLocaleLowerCase().includes(filterText.toLocaleLowerCase());
      })
    }
  }

}
