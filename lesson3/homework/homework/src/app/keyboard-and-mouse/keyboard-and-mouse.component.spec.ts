import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardAndMouseComponent } from './keyboard-and-mouse.component';

describe('KeyboardAndMouseComponent', () => {
  let component: KeyboardAndMouseComponent;
  let fixture: ComponentFixture<KeyboardAndMouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardAndMouseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyboardAndMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
