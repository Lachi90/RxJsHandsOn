import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until-example',
  templateUrl: './take-until-example.component.html',
  styleUrls: ['./take-until-example.component.css']
})
export class TakeUntilExampleComponent implements OnDestroy {
  code: string = `
    export class TakeUntilExampleComponent implements OnDestroy {

      value: number = -1;
      private destroy$ = new Subject<void>();

      constructor() {
        const source = interval(1000);
        source.pipe(takeUntil(this.destroy$)).subscribe(result => {
          this.value = result;
        });
      }

      ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
      }
    }
  `  

  value: number = -1;
  private destroy$ = new Subject<void>();

  constructor() {
    const source = interval(1000);
    source.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.value = 42;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
