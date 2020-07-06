import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Anime } from '../../models/anime';


@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private targetURL = this.baseUrl + 'api/animes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
              @Inject('BASE_URL') private baseUrl: string) { }

  // GET animes from the server
  getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.targetURL)
      .pipe(
        tap(_ => console.log('fetched animes')),
        catchError(this.handleError<Anime[]>('getAnimes', []))
      );
  }

  // GET selected anime from the server
  getAnime(id: number): Observable<Anime> {
    const url = `${this.targetURL}/${id}`;
    return this.http.get<Anime>(url).pipe(
      tap(_ => console.log(`fetched anime id=${id}`)),
      catchError(this.handleError<Anime>(`getAnime id=${id}`))
    );
  }

  // POST a new anime to the server
  addAnime(anime: Anime): Observable<Anime> {
    return this.http.post<Anime>(this.targetURL, anime, this.httpOptions).pipe(
      tap((newAnime: Anime) => console.log(`added anime w/ id=${newAnime.id}`)),
      catchError(this.handleError<Anime>('addAnime'))
    );
  }

  // PUT update the anime on the server
  updateAnime(anime: Anime): Observable<any> {
    const url = `${this.targetURL}/${anime.id}`;
    return this.http.put(url, anime, this.httpOptions).pipe(
      tap(_ => console.log(`updated anime id=${anime.id}`)),
      catchError(this.handleError<any>('updateAnime'))
    );
  }

  // DELETE the anime from the server
  deleteAnime(id: number): Observable<Anime> {
    const url = `${this.targetURL}/${id}`;
    return this.http.delete<Anime>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted anime id=${id}`)),
      catchError(this.handleError<Anime>('deleteAnime'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
