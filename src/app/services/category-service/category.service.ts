import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private targetURL = this.baseUrl + 'api/categories';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
              @Inject('BASE_URL') private baseUrl: string) { }

  // GET gategories from the server
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.targetURL)
      .pipe(
        tap(_ => console.log('fetched categories')),
        catchError(this.handleError<Category[]>('getCategories', []))
      );
  }

  // GET selected category from the server
  getCategory(id: number): Observable<Category> {
    const url = `${this.targetURL}/${id}`;
    return this.http.get<Category>(url).pipe(
      tap(_ => console.log(`fetched category id=${id}`)),
      catchError(this.handleError<Category>(`getCategory id=${id}`))
    );
  }

  // POST a new category to the server
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.targetURL, category, this.httpOptions).pipe(
      tap((newCategory: Category) => console.log(`added category w/ id=${newCategory.id}`)),
      catchError(this.handleError<Category>('addCategory'))
    );
  }

  // PUT update the category on the server
  updateCategory(category: Category): Observable<any> {
    const url = `${this.targetURL}/${category.id}`;
    return this.http.put(url, category, this.httpOptions).pipe(
      tap(_ => console.log(`updated category id=${category.id}`)),
      catchError(this.handleError<any>('updateCategory'))
    );
  }

  // DELETE the category from the server
  deleteCategory(id: number): Observable<Category> {
    const url = `${this.targetURL}/${id}`;
    return this.http.delete<Category>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted category id=${id}`)),
      catchError(this.handleError<Category>('deleteCategory'))
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
