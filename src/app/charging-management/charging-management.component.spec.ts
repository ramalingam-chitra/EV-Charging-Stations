import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChargingManagementComponent } from './charging-management.component';
import { By } from '@angular/platform-browser';

describe('ChargingManagementComponent', () => {
  let component: ChargingManagementComponent;
  let fixture: ComponentFixture<ChargingManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargingManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should checck if disableAllPorts is not called between 8AM and 5PM', () => {
    const disableallPortsSpy = spyOn(component, 'disableAllPorts');
    component.today = new Date();
    component.today.setHours(16);
    fixture.detectChanges();
    expect(disableallPortsSpy).not.toHaveBeenCalled();
  });

  it('should check if startCharging is called when the button is clicked', () => {
    const startChargingSpy = spyOn(component, 'startCharging');
    const startBtn = fixture.debugElement.query(By.css('#startBtn')).nativeElement;
    startBtn.click();
    fixture.detectChanges();
    expect(startChargingSpy).toHaveBeenCalled();
  });

  it('should check if stopCahrging is called when the button is clicked', () => {
    const stopChargingSpy = spyOn(component, 'stopCharging');
    const stopBtn = fixture.debugElement.query(By.css('#stopBtn')).nativeElement;
    stopBtn.click();
    fixture.detectChanges();
    expect(stopChargingSpy).toHaveBeenCalled();
  });
  
  it('should check if clearStationAndPort is called when the start charging function is called', () => {
    const clearStationAndPortSpy = spyOn(component, 'clearStationAndPort');
    component.startCharging(1,1,1,1,40);
    fixture.detectChanges();
    expect(clearStationAndPortSpy).toHaveBeenCalled();
  });

  it('should check if updateCarStatus is called when the start charging function is called', () => {
    const updateCarStatusSpy = spyOn(component, 'updateCarStatus');
    component.startCharging(1,1,1,1,40);
    fixture.detectChanges();
    expect(updateCarStatusSpy).toHaveBeenCalled();
  });

  it('should check if getCarDetailsById return the car details', () => {
    let car = component.getCarDetailsById(1);
    fixture.detectChanges();
    expect(car).toEqual({
      carId: 1,
      availableCharge: 0,
      carName: 'TES1',
      personName: 'PERS1',
      chargingStatus: 'In Queue'
    });
  });
  
});
