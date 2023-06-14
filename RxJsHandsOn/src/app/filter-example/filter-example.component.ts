import { Component } from '@angular/core';
import { filter, of } from 'rxjs';

@Component({
  selector: 'app-filter-example',
  templateUrl: './filter-example.component.html',
  styleUrls: ['./filter-example.component.css']
})
export class FilterExampleComponent {
  code: string = `
    filteredNumbers: number[] = [];

    constructor() {
      const source = of(1, 2, 3, 4, 5);
      source.pipe(filter(value => value % 2 === 0)).subscribe(result => {
        this.filteredNumbers.push(result);
      });
    }
  `

  filteredNumbers: number[] = [];

  constructor() {
    const source = of(1, 2, 3, 4, 5);
    source.pipe(filter(value => value % 2 === 0)).subscribe(result => {
      this.filteredNumbers.push(result);
    });
  }
}
