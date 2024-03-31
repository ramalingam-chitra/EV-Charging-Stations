import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MatTableSortComponent', () => {
  let component: MatTableSortComponent;
  let fixture: ComponentFixture<MatTableSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTableSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
