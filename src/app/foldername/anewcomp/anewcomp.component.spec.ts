import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnewcompComponent } from './anewcomp.component';

describe('AnewcompComponent', () => {
  let component: AnewcompComponent;
  let fixture: ComponentFixture<AnewcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnewcompComponent]
    });
    fixture = TestBed.createComponent(AnewcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
