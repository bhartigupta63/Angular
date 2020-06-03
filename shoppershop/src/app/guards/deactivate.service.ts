import { Injectable } from '@angular/core';
import {CanDeactivate } from '@angular/router';
import {Observable } from 'rxjs';


export interface CanDeactivateComponent{
  canDeactivate(): boolean| Promise<boolean> | Observable <boolean> ;
}
@Injectable({
  providedIn: 'root'
})
export class DeactivateService implements CanDeactivate<CanDeactivateComponent>{
  

  constructor() { }

  canDeactivate(comp:CanDeactivateComponent){
    return comp.canDeactivate()? comp.canDeactivate() : true ;
  }
}
