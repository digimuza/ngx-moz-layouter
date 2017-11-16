import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleMfComponent } from './sample-mf.component';

describe('SampleMfComponent', () => {
  let component: SampleMfComponent;
  let fixture: ComponentFixture<SampleMfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleMfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleMfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
