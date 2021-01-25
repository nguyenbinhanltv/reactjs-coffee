import React from "react";
import "./carousel.css";

export class CarouselComponent extends React.Component {
  listItems: any;
  slider: any;
  reverseItems: any;
  isSliding: boolean = false;

  componentDidMount() {
    this.listItems = document.querySelectorAll('.slide');
    this.slider = document.querySelector('.slider');
    this.reverseItems = Array.from(this.listItems).slice().reverse();
    setInterval(() => this.slide(this.listItems, this.slider, this.reverseItems), 10000);
  }

  slide(listItems: any, slider: any, reverseItems: any): void | undefined {
    const left = reverseItems[0].offsetLeft + 'px';
    const height = reverseItems[0].offsetHeight + 'px';
    const width = reverseItems[0].offsetWidth + 'px';
    const zIndex = reverseItems[0].style['z-index'];


    if (this.isSliding) return;

    this.isSliding = true;

    reverseItems.forEach((el: any, index: any) => {
      if (index < listItems.length - 1) {
        el.style.left = reverseItems[index + 1].offsetLeft + 'px';
        el.style.height = reverseItems[index + 1].offsetHeight + 'px';
        el.style.width = reverseItems[index + 1].offsetWidth + 'px';
        el.style['z-index'] = reverseItems[index + 1].style['z-index'];
        el.style.transform = 'unset';
        el.style.opacity = 1;
      }

      if (index === listItems.length - 1) {
        el.style.transform = 'scale(1.5)';
        el.style.opacity = 0;

        let cln = el.cloneNode(true);

        setTimeout(() => {
          el.remove();
          cln.style.transform = 'scale(0)';
          cln.style.left = left;
          cln.style.height = height;
          cln.style.width = width;
          cln.style.opacity = 0;
          cln.style['z-index'] = 0;
          cln.style.animation = 'unset';

          slider.appendChild(cln);

          this.listItems = document.querySelectorAll('.slide');
          this.slider = document.querySelector('.slider');
          this.reverseItems = Array.from(this.listItems).slice().reverse();

          this.isSliding = false;
        }, 1000);
      }
    });
  }

  render() {
    return (
      <div className="slider">
        <div className="slide">
          <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "images/cafe.webp"})` }} className="carousel-image">
          </div>
        </div>
        <div className="slide">
          <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "images/cafe1.webp"})` }} className="carousel-image">
          </div>
        </div>
        <div className="slide">
          <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "images/clay-banks-_wkd7XBRfU4-unsplash.jpg"})` }} className="carousel-image">
          </div>
        </div>
        <div className="slide">
          <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "images/mike-kenneally-zlwDJoKTuA8-unsplash.jpg"})` }} className="carousel-image">
          </div>
        </div>
      </div>
    );
  }
}
