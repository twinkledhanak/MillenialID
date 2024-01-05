import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfcSender } from './nfcSender';

describe('Tab2Page', () => {
  let component: NfcSender;
  let fixture: ComponentFixture<NfcSender>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NfcSender],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfcSender);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
