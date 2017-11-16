import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleBfComponent } from './sample-bf.component';

describe('SampleBfComponent', () => {
  let component: SampleBfComponent;
  let fixture: ComponentFixture<SampleBfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleBfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleBfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
