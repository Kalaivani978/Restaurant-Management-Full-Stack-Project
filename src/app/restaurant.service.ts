import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  
  private baseURL = "http://localhost:8080/Swiggy/Restaurants";

  constructor(private httpClient: HttpClient) { }
  /*
  Get all method, data has been sent to backend and get the return back.
  */
  
  getRestaurantList(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}`);
  }
  /*
   create method, data has been sent to backend and get the return back.
  */
  createRestaurant(restaurant: Restaurant): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, restaurant);
  }
  /*
   get by id method, data has been sent to backend and get the return back.
  */

  getRestaurantById(resid: number): Observable<Restaurant>{
    return this.httpClient.get<Restaurant>(`${this.baseURL}/${resid}`);
  }
   /*
   update method, data has been sent to backend and get the return back.
  */
  updateRestaurant(resid: number, restaurant: Restaurant): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${resid}`, restaurant);
  }

  //localhost:4200/delete/5
  deleteRestaurant(resid: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${resid}`);
  }
  /*
   delete all method, data has been sent to backend and get the return back.
  */
  deleteAll(): Observable<any>{
   
    return this.httpClient.delete(`${this.baseURL}`);
  }
  /*
   search method, data has been sent to backend and get the return back.
  */
  findByResName(resName:any):Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}?resName=${resName}`);
  }
  /*
   get veg hotel method, data has been sent to backend and get the return back.
  */
  findByVegRestaurant(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}/veg`);
  }
  /*
   get non veg hotel method, data has been sent to backend and get the return back.
  */
  findByNonVegRestaurant(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}/nonveg`);
  }

}



