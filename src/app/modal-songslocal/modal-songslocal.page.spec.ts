import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalSongslocalPage } from './modal-songslocal.page';

describe('ModalSongslocalPage', () => {
  let component: ModalSongslocalPage;
  let fixture: ComponentFixture<ModalSongslocalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalSongslocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
