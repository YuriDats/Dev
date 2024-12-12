import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {

  onClick(){

  }

  reviews = [
    { author: 'John Doe', comment: 'Great service!' },
    { author: 'Jane Smith', comment: 'I\'m very satisfied with the product.' },
    { author: 'David Johnson', comment: 'Highly recommended.' },
    { author: 'Sarah Thompson', comment: 'Excellent customer support.' },
    { author: 'Michael Brown', comment: 'Top-notch quality.' },
    { author: 'Emily Davis', comment: 'Fast delivery and great prices.' },
    { author: 'Robert Wilson', comment: 'Outstanding experience.' },
    { author: 'Jessica Lee', comment: 'Amazing product selection.' },
    
  ];
  visibleReviews: any[] = [];
  currentIndex = 0;
  translateX = 0;

  @ViewChild('reviewsList') reviewsList!: ElementRef<HTMLDivElement>;

  ngOnInit() {
    this.updateVisibleReviews();
  }

  scrollLeft() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.reviews.length - 5;
      this.translateX = -this.currentIndex * this.getReviewWidth();
    } else {
      this.translateX += this.getReviewWidth();
    }
    this.updateVisibleReviews();
  }

  scrollRight() {
    this.currentIndex++;
    if (this.currentIndex > this.reviews.length - 5) {
      this.currentIndex = 0;
      this.translateX = 0;
    } else {
      this.translateX -= this.getReviewWidth();
    }
    this.updateVisibleReviews();
  }

  updateVisibleReviews() {
    this.visibleReviews = this.reviews.slice(this.currentIndex, this.currentIndex + 5);
  }

  getReviewWidth() {
    const reviewElement = document.querySelector('.review');
    return reviewElement ? reviewElement.clientWidth : 0;
  }

  constructor(private router: Router) {}

  redirectToContacts() {
    this.router.navigate(['/contacts']);
  }
}
