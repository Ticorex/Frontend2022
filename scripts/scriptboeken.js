console.log('help im trapped in the console');

window.onresize = function () {
    var vpWidth = window.innerWidth;
    
    addClass(vpWidth);
    deleteClass(vpWidth);
    openDetails(vpWidth);
};

const details = document.querySelectorAll('details');
var hiddenElements = document.querySelectorAll('section:nth-of-type(4) ul li button:nth-of-type(-n+4)');

function openDetails(vpWidth) {
    if (vpWidth > 560) {
        details.forEach(detail => {
            detail.open = true;
        });
    } else {
        details.forEach(detail => {
            detail.open = false;
        });
    }
}

function addClass(vpWidth) {
    if (vpWidth < 560) {
        hiddenElements.forEach(function (element) {
            element.classList.add('hidden');
        });
    }
}

function deleteClass(vpWidth) {
    if (vpWidth > 560) {
        hiddenElements.forEach(function (element) {
            element.classList.remove('hidden');
        });
    }
}
