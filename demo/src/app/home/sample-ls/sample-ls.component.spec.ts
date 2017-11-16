import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleLsComponent } from './sample-ls.component';

describe('SampleLsComponent', () => {
  let component: SampleLsComponent;
  let fixture: ComponentFixture<SampleLsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleLsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
