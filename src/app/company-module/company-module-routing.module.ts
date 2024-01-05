import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { NfcReceiverComponent } from './nfc-receiver/nfc-receiver.component';

const routes: Routes = [
  { path: 'nfcReceiver', component: NfcReceiverComponent },
  { path: 'qrCode', component: QrCodeComponent },
  { path: '', component: NfcReceiverComponent },
  { path: '**', redirectTo : 'nfcReceiver' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyModuleRoutingModule { }
