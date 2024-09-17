import { Component } from '@angular/core';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrl: './document-upload.component.scss'
})
export class DocumentUploadComponent {
  uploadPercent!: Observable<number | undefined>;
  downloadURL!: Observable<string | undefined>;
  uploadedFile: File | null = null;

  constructor(
    private storage: AngularFireStorage,
    private vertexAIService: VertexAIService,
    private messageService: MessageService
  ) {}

  // Handle file selection from input
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadedFile = file;
    }
  }

  // Upload the file to Firebase Storage
  uploadFile() {
    if (!this.uploadedFile) {
      this.messageService.add({severity:'error', summary: 'No file selected', detail: 'Please select a file to upload.'});
      return;
    }

    const filePath = `documents/${this.uploadedFile.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, this.uploadedFile);

    // Observe percentage changes for progress bar
    this.uploadPercent = task.percentageChanges();

    // Get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url: any) => {
          this.downloadURL = url;
          this.messageService.add({severity:'success', summary: 'File uploaded', detail: 'File uploaded successfully!'});

          // Send the document URL to Vertex AI for semantic analysis
          this.vertexAIService.analyzeDocument(url).subscribe(
            response => {
              this.messageService.add({severity:'info', summary: 'Semantic Analysis Complete', detail: 'Document analyzed successfully by Vertex AI.'});
            },
            error => {
              this.messageService.add({severity:'error', summary: 'Semantic Analysis Failed', detail: 'Failed to analyze document.'});
            }
          );
        });
      })
    ).subscribe();
  }
}
