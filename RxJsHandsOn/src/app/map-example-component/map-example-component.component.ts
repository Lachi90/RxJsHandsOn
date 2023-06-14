import { Component} from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-map-example-component',
  templateUrl: './map-example-component.component.html',
  styleUrls: ['./map-example-component.component.css']
})
export class MapExampleComponentComponent {
  public code: string = `
    transformedValue: number = -1;

    constructor() {
      const source = of(1, 2, 3, 4, 5);
      source.pipe(map(value => value * 2)).subscribe(result => {
        this.transformedValue += result.toString() + ';';
      });
    }
  `	

  public transformedValue: string = '';

  constructor() {
    const source = of(1, 2, 3, 4, 5);
    source.pipe(map(value => value * 2)).subscribe(result => {
      this.transformedValue += result.toString() + ';';
    });
  }
}
