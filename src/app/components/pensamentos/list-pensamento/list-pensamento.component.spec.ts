import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPensamentoComponent } from './list-pensamento.component';

describe('ListPensamentoComponent', () => {
  let component: ListPensamentoComponent;
  let fixture: ComponentFixture<ListPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
