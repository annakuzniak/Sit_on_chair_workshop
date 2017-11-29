document.addEventListener("DOMContentLoaded", function () {

    //1. submenu

    var mainList = document.querySelectorAll("nav>ul>li");


    for (var i = 0; i < mainList.length; i++) {
        mainList[i].addEventListener("mouseover", function () {
            var nestedMenu = this.querySelector('ul');
            if(nestedMenu!=null){
                nestedMenu.style.display='block';

            }

        });

        mainList[i].addEventListener("mouseout", function () {
            var nestedMenu = this.querySelector('ul');
            if(nestedMenu!=null){
                nestedMenu.style.display='none';
            }
        });
    }

    // 2. mouseover/mouseout

    var pictOne = document.querySelector('div.box_clair.box');
    var pictTwo = document.querySelector('div.box_margarita.box');


    pictOne.addEventListener('mouseover', function () {

        this.firstElementChild.style.visibility = 'hidden';

    });
    pictOne.addEventListener('mouseout', function () {

        this.firstElementChild.style.visibility = 'visible';

    });

    pictTwo.addEventListener('mouseover', function () {

        this.firstElementChild.style.visibility = 'hidden';

    });
    pictTwo.addEventListener('mouseout', function () {

        this.firstElementChild.style.visibility = 'visible';

    });

//3.Slider

    var prev = document.querySelector('.slider_prev');
    var next = document.querySelector('.slider_next');
    var sliderImgs = document.querySelectorAll('.slider_img li');

    function putImgArray (element) {
        var newArr = [];
        for(var i=0; i<element.length; i++){
            newArr.push(element[i]);
        }
        return newArr;
    }

    var sliderImgsArray = putImgArray(sliderImgs);

    var index = 0;

    sliderImgsArray[index].classList.add('visible');

    next.addEventListener('click',function(){
        console.log('next');
        sliderImgsArray[index].classList.remove('visible');
        index++;

        if(index>sliderImgsArray.length-1){
            index = 0;
        }

        sliderImgsArray[index].classList.add('visible');
    });

    prev.addEventListener('click',function(){
        console.log('prev');
        sliderImgsArray[index].classList.remove('visible');
        index--;

        if(index<0){
            index=sliderImgsArray.length-1;
        }

        sliderImgsArray[index].classList.add('visible');
    });


});
