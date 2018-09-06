import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../../state/app.state';
import * as MusicActions from '../../store/actions/music.action';
import {Observable} from 'rxjs';
import * as fromMusic from '../../store/reducer';


@Component({
  selector: 'app-music-shell',
  templateUrl: './music-shell.component.html',
  styleUrls: ['./music-shell.component.css']
})
export class MusicShellComponent implements OnInit {

  selectedMusic$: Observable<any>;
  music$: Observable<any[]>;
  errorMessage$: Observable<string>;
  num$: Observable<number>;
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.music$ = this.store.pipe(select(fromMusic.getMusic));
    this.errorMessage$ = this.store.pipe(select(fromMusic.getError));
    this.selectedMusic$ = this.store.pipe(select(fromMusic.getSelectedMusic));
    this.num$ = this.store.pipe(select(fromMusic.getPage));

  }
  searchMusic(value: string): void {
    this.store.dispatch(new MusicActions.GetMusic(value));
  }

  musicSelected(music: any) {
    console.log('dispatch current', music);
    this.store.dispatch(new MusicActions.CurrentMusic(music));
  }

  addFavorite(music: any) {
    this.store.dispatch(new MusicActions.AddFavorite(music));
    alert(music.trackName + ' added to favorite');
  }
  setPNo(no: number){
    this.store.dispatch(new MusicActions.SetPageNo(no));
  }

}
