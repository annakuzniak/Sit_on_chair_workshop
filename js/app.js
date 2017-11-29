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


});
