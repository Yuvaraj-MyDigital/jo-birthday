import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveGameComponent } from './love-game.component';

describe('LoveGameComponent', () => {
  let component: LoveGameComponent;
  let fixture: ComponentFixture<LoveGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoveGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoveGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
