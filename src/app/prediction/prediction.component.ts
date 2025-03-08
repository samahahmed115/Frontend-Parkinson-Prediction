import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-prediction',
  imports: [
    CommonModule,
    FormsModule, 
    
  ]
,
  templateUrl: './prediction.component.html',
  styleUrl: './prediction.component.css'
})
export class PredictionComponent {
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  predictionResult: string | null = null;
  isLoading: boolean = false;

  // اختيار ملف صورة
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => this.imagePreview = reader.result as string;
      reader.readAsDataURL(file);
    }
  }

  // دعم السحب والإفلات
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      this.onFileSelected({ target: { files: event.dataTransfer.files } });
    }
  }

  // تحليل الصورة
  analyzeImage() {
    if (!this.selectedFile) return;

    this.isLoading = true;
    this.predictionResult = null;

    // محاكاة عملية التحليل
    setTimeout(() => {
      this.isLoading = false;
      this.predictionResult = "The model predicts a 78% chance of Parkinson's.";
    }, 2000);
  }

  // إعادة تعيين التحليل
  resetPrediction() {
    this.selectedFile = null;
    this.imagePreview = null;
    this.predictionResult = null;
    this.isLoading = false;
  }

  // تفعيل اختيار الملف عند النقر على منطقة الرفع
  triggerFileInput() {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) fileInput.click();
  }

  // التقاط صورة من الكاميرا
  captureImage() {
    const video = document.createElement('video');
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.srcObject = stream;
      video.play();

      // إنشاء زر لالتقاط الصورة
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d')!;
      setTimeout(() => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        this.imagePreview = canvas.toDataURL('image/png');

        // تحويل الصورة إلى ملف
        canvas.toBlob((blob) => {
          this.selectedFile = new File([blob!], "captured-image.png", { type: "image/png" });
        });

        stream.getTracks().forEach(track => track.stop()); // إيقاف الكاميرا بعد الالتقاط
      }, 2000);
    });
  }

  // تحميل تقرير PDF
  downloadPDF() {
    const doc = new jsPDF();
    doc.text("Parkinson's Disease Prediction Report", 10, 10);
    doc.text(`Result: ${this.predictionResult}`, 10, 20);
    doc.save("Prediction_Report.pdf");
  }
}