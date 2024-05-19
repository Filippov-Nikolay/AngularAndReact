import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleFullComponent } from './lifecycle-full.component';

describe('LifecycleFullComponent', () => {
  let component: LifecycleFullComponent;
  let fixture: ComponentFixture<LifecycleFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleFullComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifecycleFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
