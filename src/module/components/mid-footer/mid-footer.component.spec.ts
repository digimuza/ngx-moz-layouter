import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidFooterComponent } from './mid-footer.component';

describe('MidFooterComponent', () => {
  let component: MidFooterComponent;
  let fixture: ComponentFixture<MidFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
