import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'firstAssignment';
  opened = false;

 constructor(private router:Router){}
 goToPage(pageName:string):void{
     this.router.navigate([`${pageName}`]);
   }
   onClickMe() {
    //alert("Button is clickedrtrtryt");
    this.router.navigateByUrl('/home');
    this.router.navigateByUrl('/contact');
    this.router.navigateByUrl('/about');
 }
 onHome(){
  //alert("Button is Home ");
  (document.getElementById("myHeader") as HTMLInputElement).value = 'home';

   // Get text fielddocument.getElementById('myHeader')?.setAttribute('myHeader',"Hello RAm");

 }
 onContact(){
  (document.getElementById("myHeader") as HTMLInputElement).value = 'Contact';
 }
 onAbout()
 {
   (document.getElementById("myHeader") as HTMLInputElement).value = 'About';

 }
 
}



