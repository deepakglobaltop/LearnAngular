import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  isValidUser(userId:String)
  {
if(userId=="rids")
{
  return true;
}
else
{
  return false;
}
  }
}
