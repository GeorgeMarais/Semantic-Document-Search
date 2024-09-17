import { EnvironmentInjector, NgModule } from '@angular/core';
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
    provideFirebaseApp(() => initializeApp({
      "projectId":`${process.env['FIREBASE_PROJECT_ID']}`,
      "appId":`${process.env['FIREBASE_APP_ID']}`,
      "storageBucket":`${process.env['STORAGE_BUCKET']}`,
      "apiKey":`${process.env['FIREBASE_API_KEY']}`,
      "authDomain":`${process.env['AUTH_DOMAIN']}`,
      "messagingSenderId":`${process.env['MESSAGING_SENDER_ID']}`})),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideVertexAI(() => getVertexAI())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
