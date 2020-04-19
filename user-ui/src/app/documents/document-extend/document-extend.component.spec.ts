import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDocumentComponent } from './simple-document.component';

describe('SimpleDocumentComponent', () => {
  let component: SimpleDocumentComponent;
  let fixture: ComponentFixture<SimpleDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
