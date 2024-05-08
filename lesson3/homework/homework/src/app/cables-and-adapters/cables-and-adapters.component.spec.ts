import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CablesAndAdaptersComponent } from './cables-and-adapters.component';

describe('CablesAndAdaptersComponent', () => {
  let component: CablesAndAdaptersComponent;
  let fixture: ComponentFixture<CablesAndAdaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CablesAndAdaptersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CablesAndAdaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
