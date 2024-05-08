import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamimgComponent } from './gamimg.component';

describe('GamimgComponent', () => {
  let component: GamimgComponent;
  let fixture: ComponentFixture<GamimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamimgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
