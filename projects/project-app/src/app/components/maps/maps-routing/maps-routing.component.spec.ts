import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsRoutingComponent } from './maps-routing.component';

describe('MapsRoutingComponent', () => {
  let component: MapsRoutingComponent;
  let fixture: ComponentFixture<MapsRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsRoutingComponent]
    });
    fixture = TestBed.createComponent(MapsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
