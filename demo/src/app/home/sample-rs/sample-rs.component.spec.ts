import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRsComponent } from './sample-rs.component';

describe('SampleRsComponent', () => {
  let component: SampleRsComponent;
  let fixture: ComponentFixture<SampleRsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleRsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
