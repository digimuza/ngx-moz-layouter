import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRcComponent } from './sample-rc.component';

describe('SampleRcComponent', () => {
  let component: SampleRcComponent;
  let fixture: ComponentFixture<SampleRcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleRcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
