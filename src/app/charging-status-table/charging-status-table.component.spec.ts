import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChargingStatusTableComponent } from './charging-status-table.component';

describe('ChargingStatusTableComponent', () => {
  let component: ChargingStatusTableComponent;
  let fixture: ComponentFixture<ChargingStatusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargingStatusTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargingStatusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
