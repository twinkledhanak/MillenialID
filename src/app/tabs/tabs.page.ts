import { Component, OnInit } from '@angular/core';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  

  // constructor(private androidFingerprintAuth: AndroidFingerprintAuth) { }

  // ngOnInit(): void {
  //   this.androidFingerprintAuth.isAvailable()
  //   .then((result)=> {
  //     if(result.isAvailable){
  //       // it is available
  
  //       this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
  //         .then(result => {
  //            if (result.withFingerprint) {
  //                console.log('Successfully encrypted credentials.');
  //                console.log('Encrypted credentials: ' + result.token);
  //            } else if (result.withBackup) {
  //              console.log('Successfully authenticated with backup password!');
  //            } else console.log('Didn\'t authenticate!');
  //         })
  //         .catch(error => {
  //            if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
  //              console.log('Fingerprint authentication cancelled');
  //            } else console.error(error)
  //         });
  
  //     } else {
  //       // fingerprint auth isn't available
  //     }
  //   })
  //   .catch(error => console.error(error));
  // }
 

  constructor(private faio: FingerprintAIO) { }
  
  ngOnInit(): void {
    this.faio.show({
      clientId: 'Fingerprint-Demo', //Android: Used for encryption. iOS: used for dialogue if no `localizedReason` is given.
      clientSecret: 'o7aoOMYUbyxaD23oFAnJ', //Necessary for Android encrpytion of keys. Use random secret key.
      // disableBackup: true,  //Only for Android(optional)
      localizedFallbackTitle: '', //Only for iOS
      localizedReason: 'Please authenticate' //Only for iOS
    })
    .then((result: any) => console.log(result))
    .catch((error: any) => console.log(error));
  }


  



}
