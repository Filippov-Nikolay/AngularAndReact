import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesForElectronicsComponent } from './accessories-for-electronics.component';

describe('AccessoriesForElectronicsComponent', () => {
  let component: AccessoriesForElectronicsComponent;
  let fixture: ComponentFixture<AccessoriesForElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesForElectronicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessoriesForElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
