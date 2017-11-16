import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleLcComponent } from './sample-lc.component';

describe('SampleLcComponent', () => {
  let component: SampleLcComponent;
  let fixture: ComponentFixture<SampleLcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleLcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
