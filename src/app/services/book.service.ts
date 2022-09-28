import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../Dtos/Book';
import { Search } from '../Dtos/Search';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  private serverUrl = environment.apiBaseUrl;
  private book?: Book;
  constructor(private http: HttpClient) { }
  public getFavorites(id: number): Observable<Book[]>{
    return this.http.get<Book[]>(this.serverUrl+'/User/Favorites/'+id);
  }
  public getHistory(id: number): Observable<Book[]>{
    return this.http.get<Book[]>(this.serverUrl+'/User/History/'+id);
  }
  public addToFavorites(userid: number,bookid: number): Observable<Book>{
    return this.http.post<Book>(this.serverUrl+"/User/" + bookid+ "/" + userid,null);
  }
  public removeFromFavorites(userid: number,bookid: number): Observable<Book>{
    return this.http.delete<Book>(this.serverUrl+"/User/" + bookid+ "/" + userid);
  }
  public getBooksByAuthor(authorid: number): Observable<Book[]>{
    return this.http.get<Book[]>(this.serverUrl+'/Book/Author/'+authorid);
}
public search(search: string): Observable<Search[]>{
  return this.http.get<Search[]>(this.serverUrl+'/User/'+search);
}
public getBookById(id: number, userid: number): Observable<Book>{
  return this.http.get<Book>(this.serverUrl+'/Book/'+id + "/"+ userid);
}
public getBookContent(id: number,userid: number): Observable<HttpResponse<Blob>>{
  return this.http.get<Blob>(this.serverUrl+'/Book/Content/'+userid+"/"+id,{ observe: 'response', responseType: 'blob' as 'json' });
}
public getBookImage(id: number): Observable<HttpResponse<Blob>>{
  return this.http.get<Blob>(this.serverUrl+'/Book/Image/'+id,{ observe: 'response', responseType: 'blob' as 'json' });
}
public getBooksByGenre(genreid: number): Observable<Book[]>{
  return this.http.get<Book[]>(this.serverUrl+'/Book/Genre/'+genreid);
}
public add(book: FormData): Observable<Book>{
  return this.http.post<Book>(this.serverUrl+'/Book',book);
}
public update(book: FormData): Observable<Book>{
  return this.http.put<Book>(this.serverUrl+'/Book',book);
}
public addAuthor(bookid: number, authorid: number){
  return this.http.put(this.serverUrl+'/Book/Author/'+authorid+'/'+bookid,null);
}
public addGenre(bookid: number, genreid: number){
  return this.http.put(this.serverUrl+'/Book/Genre/'+genreid+'/'+bookid,null);
}

}
