document.addEventListener("DOMContentLoaded", function () {

    //submenu

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




});
