import { Component } from '@angular/core';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router) { 
    
  }

  ReceiveCode(){
    this.router.navigate(['/company/nfcReceiver']);
  }

  navigateForNfc(){
    console.log('in');
    this.router.navigate(['/tabs/tab2/'+'NFC']);
    
  }

  navigateForQr(){
    console.log('in');

    this.router.navigate(['/tabs/tab2/'+'QR']);

  }

}
