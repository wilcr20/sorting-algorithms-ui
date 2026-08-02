import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleSort } from './bubble-sort';

describe('BubbleSort', () => {
  let component: BubbleSort;
  let fixture: ComponentFixture<BubbleSort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleSort]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleSort);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
