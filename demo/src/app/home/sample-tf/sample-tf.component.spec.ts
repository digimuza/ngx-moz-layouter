import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTfComponent } from './sample-tf.component';

describe('SampleTfComponent', () => {
  let component: SampleTfComponent;
  let fixture: ComponentFixture<SampleTfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleTfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
