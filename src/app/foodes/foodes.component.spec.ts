import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodesComponent } from './foodes.component';

describe('FoodesComponent', () => {
  let component: FoodesComponent;
  let fixture: ComponentFixture<FoodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
