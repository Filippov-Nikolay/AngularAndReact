import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeEquipmentComponent } from './office-equipment.component';

describe('OfficeEquipmentComponent', () => {
  let component: OfficeEquipmentComponent;
  let fixture: ComponentFixture<OfficeEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeEquipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfficeEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
