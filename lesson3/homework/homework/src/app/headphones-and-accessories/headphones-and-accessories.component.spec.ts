import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphonesAndAccessoriesComponent } from './headphones-and-accessories.component';

describe('HeadphonesAndAccessoriesComponent', () => {
  let component: HeadphonesAndAccessoriesComponent;
  let fixture: ComponentFixture<HeadphonesAndAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadphonesAndAccessoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadphonesAndAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
