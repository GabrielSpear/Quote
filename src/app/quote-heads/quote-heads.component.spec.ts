import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteHeadsComponent } from './quote-heads.component';

describe('QuoteHeadsComponent', () => {
  let component: QuoteHeadsComponent;
  let fixture: ComponentFixture<QuoteHeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteHeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteHeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
