import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeUntilExampleComponent } from './take-until-example.component';

describe('TakeUntilExampleComponent', () => {
  let component: TakeUntilExampleComponent;
  let fixture: ComponentFixture<TakeUntilExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeUntilExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeUntilExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
