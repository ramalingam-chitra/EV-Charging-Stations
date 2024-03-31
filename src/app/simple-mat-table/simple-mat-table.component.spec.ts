import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleMatTableComponent } from './simple-mat-table.component';

describe('SimpleMatTableComponent', () => {
  let component: SimpleMatTableComponent;
  let fixture: ComponentFixture<SimpleMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleMatTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
