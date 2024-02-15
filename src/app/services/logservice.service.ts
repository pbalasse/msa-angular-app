import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}
  /**
   * Logs a message to the console.
   */
  log(message: string): void {
    console.log(message);
  }
}
