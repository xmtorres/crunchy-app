import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Manga } from '../../models/manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  private targetURL = this.baseUrl + 'api/mangas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
              @Inject('BASE_URL') private baseUrl: string) { }

  // GET mangas from the server
  getMangas(): Observable<Manga[]> {
    return this.http.get<Manga[]>(this.targetURL)
      .pipe(
        tap(_ => console.log('fetched mangas')),
        catchError(this.handleError<Manga[]>('getMangas', []))
      );
  }

  // GET selected manga from the server
  getManga(id: number): Observable<Manga> {
    const url = `${this.targetURL}/${id}`;
    return this.http.get<Manga>(url).pipe(
      tap(_ => console.log(`fetched manga id=${id}`)),
      catchError(this.handleError<Manga>(`getManga id=${id}`))
    );
  }

  // POST a new manga to the server
  addManga(manga: Manga): Observable<Manga> {
    return this.http.post<Manga>(this.targetURL, manga, this.httpOptions).pipe(
      tap((newManga: Manga) => console.log(`added manga w/ id=${newManga.id}`)),
      catchError(this.handleError<Manga>('addManga'))
    );
  }

  // PUT update the manga on the server
  updateManga(manga: Manga): Observable<any> {
    const url = `${this.targetURL}/${manga.id}`;
    return this.http.put(url, manga, this.httpOptions).pipe(
      tap(_ => console.log(`updated manga id=${manga.id}`)),
      catchError(this.handleError<any>('updateManga'))
    );
  }

  // DELETE the manga from the server
  deleteManga(id: number): Observable<Manga> {
    const url = `${this.targetURL}/${id}`;
    return this.http.delete<Manga>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted manga id=${id}`)),
      catchError(this.handleError<Manga>('deleteManga'))
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
