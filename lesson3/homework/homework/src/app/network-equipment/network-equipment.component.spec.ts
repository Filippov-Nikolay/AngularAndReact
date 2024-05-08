import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkEquipmentComponent } from './network-equipment.component';

describe('NetworkEquipmentComponent', () => {
  let component: NetworkEquipmentComponent;
  let fixture: ComponentFixture<NetworkEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkEquipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetworkEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
