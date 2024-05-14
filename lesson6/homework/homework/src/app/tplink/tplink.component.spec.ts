import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TplinkComponent } from './tplink.component';

describe('TplinkComponent', () => {
  let component: TplinkComponent;
  let fixture: ComponentFixture<TplinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TplinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TplinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
