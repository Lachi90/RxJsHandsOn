import { Component } from '@angular/core';
import { first, of } from 'rxjs';

@Component({
  selector: 'app-first-example',
  templateUrl: './first-example.component.html',
  styleUrls: ['./first-example.component.css']
})
export class FirstExampleComponent {
  code: string = `  
    firstValue: number = -1;

    constructor() {
      const source = of(1, 2, 3, 4, 5);
      source.pipe(first()).subscribe(result => {
        this.firstValue = result;
      });
    }
  `

  firstValue: number = -1;

  constructor() {
    const source = of(1, 2, 3, 4, 5);
    source.pipe(first()).subscribe(result => {
      this.firstValue = result;
    });
  }

}
