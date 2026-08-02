import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeWaysMergeSort } from './three-ways-merge-sort';

describe('ThreeWaysMergeSort', () => {
  let component: ThreeWaysMergeSort;
  let fixture: ComponentFixture<ThreeWaysMergeSort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeWaysMergeSort]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeWaysMergeSort);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
