import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBaseComponent } from './text-base.component';

describe('TextBaseComponent', () => {
  let component: TextBaseComponent;
  let fixture: ComponentFixture<TextBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
