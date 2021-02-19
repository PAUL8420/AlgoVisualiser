import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualScreenComponent } from './visual-screen.component';

describe('VisualScreenComponent', () => {
  let component: VisualScreenComponent;
  let fixture: ComponentFixture<VisualScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
