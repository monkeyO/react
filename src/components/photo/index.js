import React, { Component } from 'react';
import './index.less';
import allBanner from '../../utils/banner';
import Swiper from 'swiper/dist/js/swiper.js';

export default class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: allBanner
        }
        document.title = "展览墙"       
    }
    componentDidMount() {
        let galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        let mySwiper = new Swiper('.gallery-top', { // eslint-disable-line no-unused-vars
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs
            }
        })
    }
    componentWillMount() {
      
    }
    render() {
        return (
            <div className="photo-wrapper wrapper">
                <div className="swiper-container gallery-top">
                    <div className="swiper-wrapper">
                        {
                            allBanner.map((item,index) => {
                                let bg = {
                                    backgroundImage:`url(${item.url})`
                                }
                                return (
                                    <div key={index} className="swiper-slide"  style={bg}>
                                          <p className="swiper-name">
                                             {item.name}
                                          </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-button-next swiper-button-white"></div>
                    <div className="swiper-button-prev swiper-button-white"></div>
                </div>
                <div className="swiper-container gallery-thumbs">
                    <div className="swiper-wrapper">
                        {
                            allBanner.map((item,index) => {
                                let bg = {
									backgroundImage:`url(${item.url})`
                                }
                                return (
                                    <div key={index} className="swiper-slide" style={bg}>
									  
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}