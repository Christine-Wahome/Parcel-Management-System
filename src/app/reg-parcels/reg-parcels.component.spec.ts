import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegParcelsComponent } from './reg-parcels.component';

describe('RegParcelsComponent', () => {
  let component: RegParcelsComponent;
  let fixture: ComponentFixture<RegParcelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RegParcelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
