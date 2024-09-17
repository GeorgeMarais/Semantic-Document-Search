import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai-preview';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { DocumentSearchComponent } from './components/document-search-component/document-search/document-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentUploadComponent,
    DocumentSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"sem-search007","appId":"1:231921245050:web:9acc3e6276e474ec6894c3","storageBucket":"sem-search007.appspot.com","apiKey":"AIzaSyB-IWJJzeGiSV-L0r1wUDsQYDGUY_9NNgo","authDomain":"sem-search007.firebaseapp.com","messagingSenderId":"231921245050"})),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideVertexAI(() => getVertexAI())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
