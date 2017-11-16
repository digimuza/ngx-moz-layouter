import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleBhComponent } from './sample-bh.component';

describe('SampleBhComponent', () => {
  let component: SampleBhComponent;
  let fixture: ComponentFixture<SampleBhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleBhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleBhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
