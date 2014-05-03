
angular.module('website', ['ngAnimate','ngTouch','ngRoute','ui.bootstrap'])

	.config(['$routeProvider', function($routeProvider) {
'use strict';
	$routeProvider. when('/',{controller:'MainController', templateUrl:'html/homePage.html'}).
				   otherwise({redirectTo:"/"})

}])
	.controller('MainController', function ($scope,$interval) {
        console.log("hello");
        $scope.slides = [
            {image: 'assets/slideShow/img00.jpg', description: 'Image 00'},
            {image: 'assets/slideShow/img01.jpg', description: 'Image 01'},
            {image: 'assets/slideShowimages/img02.jpg', description: 'Image 02'},
            {image: 'assets/slideShow/img03.jpg', description: 'Image 03'},
            {image: 'assets/slideShow/img04.jpg', description: 'Image 04'}
        ];
    $scope.webImageUrlArray=["assets/imageWebReferences/personalWebThumb.jpg","assets/imageWebReferences/martialArtWebThumb.jpg"];

    $scope.personalWebArray=["assets/personalWeb/mainPics/homePage1.jpg","assets/personalWeb/mainPics/photoPage2.jpg","assets/personalWeb/mainPics/photoPageShot3.jpg","assets/personalWeb/mainPics/musicPage4.jpg",
                             "assets/personalWeb/mainPics/musicPageShot5.jpg","assets/personalWeb/mainPics/collectionPage6.jpg","assets/personalWeb/mainPics/collectionPageShot7.jpg",
                             "assets/personalWeb/mainPics/aboutPage8.jpg","assets/personalWeb/mainPics/contactPage9.jpg"];
    $scope.webImageThumbsArray =["assets/personalWeb/thumbs/thumbHomePage1.jpg","assets/personalWeb/thumbs/thumbPhotoPage2.jpg","assets/personalWeb/thumbs/thumbPhotoPageShot3.jpg","assets/personalWeb/thumbs/thumbMusicPage4.jpg",
                 "assets/personalWeb/thumbs/thumbMusicPageShot5.jpg","assets/personalWeb/thumbs/thumbCollectionPage6.jpg","assets/personalWeb/thumbs/thumbCollectionPageShot7.jpg",
                 "assets/personalWeb/thumbs/thumbAboutPage8.jpg","assets/personalWeb/thumbs/thumbContactPage9.jpg"];

    $scope.martialArtWebArray=["assets/martialArtWeb/mainPics/Home1.jpg","assets/martialArtWeb/mainPics/Gallery2.jpg","assets/martialArtWeb/mainPics/Kids3.jpg",
                              "assets/martialArtWeb/mainPics/Women4.jpg","assets/martialArtWeb/mainPics/Schedule5.jpg","assets/martialArtWeb/mainPics/Contactus6.jpg"];
    $scope.martialArtWebThumbArray=["assets/martialArtWeb/thumbs/thumbHome1.jpg","assets/martialArtWeb/thumbs/thumbGallery2.jpg","assets/martialArtWeb/thumbs/thumbKids3.jpg",
                                    "assets/martialArtWeb/thumbs/thumbWomen4.jpg","assets/martialArtWeb/thumbs/thumbSchedule5.jpg","assets/martialArtWeb/thumbs/thumbContactus6.jpg"];

    //$scope.urlImageArrayLength = $scope.slides.length;
    $scope.popupWebArray=[];//array that content all the image of the websites that display on Popup
    $scope.timer=3000;
    $scope.popupTimer=2500;
    $scope.stopTimer="";
    $scope.nextTimer="";
    $scope.popupStopTimer="";
    $scope.popupNextTimer="";
    $scope.preTimer="";
    $scope.toggle=false;
    $scope.isDisplayPopupImage=false;//display the popup for webimage
    $scope.popupImageCounter=0;//the first image of the array
    $scope.caroselButtonLabel="Play";
    $scope.isOnCarouselMode= false;
    $scope.showPlayCaroselButton=true;//show the playCarouseSlideShow at the beginning
    $scope.isEnter=false;
    $scope.counter =0;//index of image
    $scope.contactImage="assets/icons/sendMail.jpeg";
   //-----===========TESTING========================
        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };


        $scope.nextSlide = function () {
            console.log("next");
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
        console.log("end");

        //=========init==============
        $scope.init = function(imgArray ){
        
        //$scope.urlImgArray = [];
            $scope.stopTimer=$interval(function(){
                $scope.nextImg();

            }, $scope.timer);
        };
        //==========nextImg==========
    $scope.nextImg=function(){
         $interval.cancel($scope.stopTimer);
         $interval.cancel($scope.preTimer);

       // if ($scope.counter < $scope.urlImgArray.length-1){
            if($scope.currentIndex === $scope.slides.length-1)
            {
                 $interval.cancel($scope.nextTimer);
                $scope.nextTimer=$interval($scope.nextImg,$scope.timer);
                $scope.currentIndex=0;
            }
           // $timeout($scope.nextImg,$scope.time);
            else
            {
                 $interval.cancel($scope.nextTimer);
                $scope.nextTimer=$interval($scope.nextImg,$scope.timer);
                $scope.currentIndex ++;
            }
        };

        //========================selectedImage=============$
   $scope.thumbImageWebSite=[];
   $scope.selectedImage = function(imageUrl){
    console.log("image",imageUrl);
    if (imageUrl ==='assets/imageWebReferences/personalWebThumb.jpg')
    {
        $scope.popupWebArray=$scope.personalWebArray; //copy the personal website to the popupWebArray
      $scope.thumbImageWebSite=$scope.webImageThumbsArray;
        $scope.isDisplayPopupImage=true;
      console.log("it is here");
    }
    else if(imageUrl==='assets/imageWebReferences/martialArtWebThumb.jpg')
    {
      $scope.popupWebArray=$scope.martialArtWebArray;
       $scope.thumbImageWebSite=$scope.martialArtWebThumbArray;
      $scope.isDisplayPopupImage=true;
      console.log("OR it is here");
    }
   } ;
   //===============nextPopuImg===================
   $scope.nextPopupImg=function(){
        if ($scope.popupImageCounter===$scope.popupWebArray.length-1)
        {
            $scope.popupImageCounter=0;
        }
        else
        {
            $scope.popupImageCounter++;
        }
    $scope.isMouseOver=false;
   };
  //==================prePopupImg===============
  $scope.prePopupImg=function(){
        if ($scope.popupImageCounter===0)
        {
            $scope.popupImageCounter=$scope.popupWebArray.length-1;
        }
        else
        {
            $scope.popupImageCounter--;
        }
      $scope.isMouseOver=false;
   };
   //===============caroselButton==================

   $scope.playCaroselSlideShow=function(){

        //==========nextImg==========
         $interval.cancel($scope.popupStopTimer);
       
       // if ($scope.counter < $scope.urlImgArray.length-1){
            if($scope.popupImageCounter === $scope.popupWebArray.length-1)
            {
                 $interval.cancel($scope.popupNextTimer);
                $scope.popupNextTimer=$interval($scope.playCaroselSlideShow,$scope.popupTimer);
                $scope.popupImageCounter=0;
            }
           // $timeout($scope.nextImg,$scope.time);
            else
            {
                 $interval.cancel($scope.popupNextTimer);
                $scope.popupNextTimer=$interval($scope.playCaroselSlideShow,$scope.popupTimer);
                $scope.popupImageCounter ++;
            }
             $scope.showPlayCaroselButton=false;//hide the playCarouseSlideShow at the beginning

    };
    //==============stopCaroselSlideShow================
    $scope.stopCaroselSlideShow=function(){
        $interval.cancel($scope.popupNextTimer);
         $scope.showPlayCaroselButton=true;//show the playCarouseSlideShow at the beginning
    };

    //=============mouseOver==============
    $scope.mouseOverIndex=-1;
    $scope.isMouseOver=false;
    $scope.mouseOver=function(index)
    {
      $scope.mouseOverIndex=index;
      $scope.isMouseOver=true;

    }

    //============selectThumbPopupImag=============
    $scope.selectThumbPopupImag=function(imgIndex){
      console.log("imgIndex",imgIndex);
      $scope.popupImageCounter=imgIndex;
    }
    })
	
	.animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });


    
   