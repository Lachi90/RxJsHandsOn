import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapExampleComponentComponent } from './map-example-component.component';

describe('MapExampleComponentComponent', () => {
  let component: MapExampleComponentComponent;
  let fixture: ComponentFixture<MapExampleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapExampleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapExampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
