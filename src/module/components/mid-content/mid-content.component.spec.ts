import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidContentComponent } from './mid-content.component';

describe('MidContentComponent', () => {
  let component: MidContentComponent;
  let fixture: ComponentFixture<MidContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
