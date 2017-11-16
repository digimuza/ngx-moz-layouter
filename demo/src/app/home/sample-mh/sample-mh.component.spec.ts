import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleMhComponent } from './sample-mh.component';

describe('SampleMhComponent', () => {
  let component: SampleMhComponent;
  let fixture: ComponentFixture<SampleMhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleMhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleMhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
