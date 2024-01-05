import { Component, OnInit } from '@angular/core';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';

@Component({
  selector: 'app-nfc-receiver',
  templateUrl: './nfc-receiver.component.html',
  styleUrls: ['./nfc-receiver.component.scss'],
})
export class NfcReceiverComponent {

  constructor(private nfc: NFC, private ndef: Ndef) { 
    console.log('listening maybe');
    this.nfc.addNdefListener(() => {
      console.log('successfully attached ndef listener');
    }, (err) => {
      console.log('error attaching ndef listener', err);
      alert(err);
    }).subscribe((event) => {
      console.log(String.fromCharCode.apply(null, event.tag.ndefMessage[0].payload.splice(0, 3)))
      let abc: string = String.fromCharCode.apply(null, event.tag.ndefMessage[0].payload);
      console.log(abc);
      console.log('received ndef message. the tag contains: ', event.tag);
      console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
      alert(event.tag);
      alert(event.tag.id);
      // let message = this.ndef.textRecord('Hello world');
      // this.nfc.share([message]).then(this.onSuccess()).catch(onerror);
    });
  }

}
