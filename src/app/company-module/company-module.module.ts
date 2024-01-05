import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyModuleRoutingModule } from './company-module-routing.module';
import { NfcSender } from '../NfcSender/nfcSender';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { NfcReceiverComponent } from './nfc-receiver/nfc-receiver.component';

@NgModule({
  declarations: [NfcReceiverComponent, QrCodeComponent],
  imports: [
    CommonModule,
    CompanyModuleRoutingModule
  ],providers:[NFC,Ndef]
})
export class CompanyModuleModule { }
