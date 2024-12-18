import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeComponent } from './list-employee.component';

describe('ListEmployeeComponent', () => {
  let component: ListEmployeeComponent;
  let fixture: ComponentFixture<ListEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEmployeeComponent]
    });
    fixture = TestBed.createComponent(ListEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
