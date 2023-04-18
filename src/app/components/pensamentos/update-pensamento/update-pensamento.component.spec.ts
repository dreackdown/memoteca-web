import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePensamentoComponent } from './update-pensamento.component';

describe('UpdatePensamentoComponent', () => {
  let component: UpdatePensamentoComponent;
  let fixture: ComponentFixture<UpdatePensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
