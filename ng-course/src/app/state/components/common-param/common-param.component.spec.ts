/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommonParamComponent } from './common-param.component';

describe('CommonParamComponent', () => {
  let component: CommonParamComponent;
  let fixture: ComponentFixture<CommonParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
