export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  isAdmin?:boolean;
  nationality?:boolean;
  technique?:boolean;
  mainActivity?:string;
  secondActivity?:string;
}
