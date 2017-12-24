import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalksimulatorComponent } from './walksimulator.component';

describe('WalksimulatorComponent', () => {
  let component: WalksimulatorComponent;
  let fixture: ComponentFixture<WalksimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalksimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalksimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
