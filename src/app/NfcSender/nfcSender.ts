import { Component, OnInit } from '@angular/core';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class NfcSender implements OnInit {
  method: string;

  constructor(private nfc: NFC, private ndef: Ndef, private route: ActivatedRoute) { 
    
  }

  
  ngOnInit(): void {
    this.method = this.route.snapshot.paramMap.get('method');
    console.log(this.method);
  }



  shareCode(){
    let message = this.ndef.textRecord('testing nfc');
    console.log(message);
    
    this.nfc.write([message[0]]).then(this.onSuccess()).catch(this.error());
  }

  error():any{

  }
  
    onSuccess(): any{
      console.log('sent');
    }
  



}
