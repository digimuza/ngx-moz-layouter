import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleThComponent } from './sample-th.component';

describe('SampleThComponent', () => {
  let component: SampleThComponent;
  let fixture: ComponentFixture<SampleThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
