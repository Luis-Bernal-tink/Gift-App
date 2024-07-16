import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftModuleComponent } from './gift-module.component';

describe('GiftModuleComponent', () => {
  let component: GiftModuleComponent;
  let fixture: ComponentFixture<GiftModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
