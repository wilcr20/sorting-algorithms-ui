import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleSort } from './cycle-sort';

describe('CycleSort', () => {
  let component: CycleSort;
  let fixture: ComponentFixture<CycleSort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CycleSort]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CycleSort);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
