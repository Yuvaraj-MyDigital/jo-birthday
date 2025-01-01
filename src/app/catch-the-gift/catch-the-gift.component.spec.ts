import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchTheGiftComponent } from './catch-the-gift.component';

describe('CatchTheGiftComponent', () => {
  let component: CatchTheGiftComponent;
  let fixture: ComponentFixture<CatchTheGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatchTheGiftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatchTheGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
