function createDigitStructure() {
    console.log("NUmbers");
    const digit = document.createElement('div');
    digit.classList.add('digit');

    const topSegment = document.createElement('div');
    topSegment.classList.add('top-segment');

    const horizontalTop = document.createElement('div');
    horizontalTop.classList.add('horizontal-bar');

    const verticalTopLeft = document.createElement('div');
    verticalTopLeft.classList.add('vertical-bar', 'vertical-top');

    const verticalTopRight = document.createElement('div');
    verticalTopRight.classList.add('vertical-bar', 'vertical-top');

    topSegment.appendChild(verticalTopLeft);
    topSegment.appendChild(horizontalTop);
    topSegment.appendChild(verticalTopRight);

    const horizontalMiddle = document.createElement('div');
    horizontalMiddle.classList.add('horizontal-bar');

    const bottomSegment = document.createElement('div');
    bottomSegment.classList.add('bottom-segment');

    const verticalBottomLeft = document.createElement('div');
    verticalBottomLeft.classList.add('vertical-bar', 'vertical-bottom');

    const verticalBottomRight = document.createElement('div');
    verticalBottomRight.classList.add('vertical-bar', 'vertical-bottom');

    bottomSegment.appendChild(verticalBottomLeft);
    bottomSegment.appendChild(horizontalMiddle);
    bottomSegment.appendChild(verticalBottomRight);

    const horizontalBottom = document.createElement('div');
    horizontalBottom.classList.add('horizontal-bar');

    digit.appendChild(topSegment);
    digit.appendChild(bottomSegment);
    digit.appendChild(horizontalBottom);
    return digit;
}

function displayNumber() {
    console.log("entered");
    const digitDisplay = document.getElementById('digitDisplay');
    var totalDigits = 3;

    while(totalDigits != 0) {
        const digitStructure = createDigitStructure();
        digitDisplay.appendChild(digitStructure);
        totalDigits -= 1;
    }
}

function displayEnteredNumber() {
    const inputNumber = document.getElementById('inputValue').value.padStart(3, '0');
    const digitDisplay = document.getElementById('digitDisplay');
    console.log("Digit display :", digitDisplay);
    const digitElements = digitDisplay.children;

    const barMap = {
        '0': ['top', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'bottom'],
        '1': ['top-right', 'bottom-right'],
        '2': ['top', 'top-right', 'middle', 'bottom-left', 'bottom'],
        '3': ['top', 'top-right', 'middle', 'bottom-right', 'bottom'],
        '4': ['top-left', 'middle', 'top-right', 'bottom-right'],
        '5': ['top', 'top-left', 'middle', 'bottom-right', 'bottom'],
        '6': ['top', 'top-left', 'middle', 'bottom-left', 'bottom-right', 'bottom'],
        '7': ['top', 'top-right', 'bottom-right'],
        '8': ['top', 'top-left', 'top-right', 'middle', 'bottom-left', 'bottom-right', 'bottom'],
        '9': ['top', 'top-left', 'top-right', 'middle', 'bottom-right', 'bottom'],
    };

    for (let i = 0; i < 3; i++) {
        const digit = inputNumber[i];
        const horizontalBars = digitElements[i].getElementsByClassName('horizontal-bar');
        const verticalBarsTop = digitElements[i].getElementsByClassName('vertical-top')
        const verticalBarsBottom = digitElements[i].getElementsByClassName('vertical-bottom');
        console.log("vertival top vars:", verticalBarsTop);
        console.log("vertival bottom vars:", verticalBarsBottom);
        console.log("horizontal Bars :", horizontalBars);

        const horizontalBarsArray = Array.from(horizontalBars);
        const verticalBarsTopArray = Array.from(verticalBarsTop);
        const verticalBarsBottomArray = Array.from(verticalBarsBottom);

        horizontalBarsArray.forEach(bar => bar.classList.remove('active'));
        verticalBarsTopArray.forEach(bar => bar.classList.remove('active'));
        verticalBarsBottomArray.forEach(bar => bar.classList.remove('active'));

        barMap[digit].forEach(bar => {
            if (bar === 'top') {
                 horizontalBars[0].classList.add('active');
            }
            if (bar === 'bottom') {
                horizontalBars[2].classList.add('active');
            }
            if (bar === 'middle') { 
                horizontalBars[1].classList.add('active');
            }
            if (bar === 'top-left') { 
                verticalBarsTop[0].classList.add('active');
            }
            if (bar === 'top-right') {
                verticalBarsTop[1].classList.add('active');
            }
            if (bar === 'bottom-left') {
                verticalBarsBottom[0].classList.add('active');
            }
            if (bar === 'bottom-right') {
                verticalBarsBottom[1].classList.add('active');
            }
        });
    }
}

window.onload = function() {
    displayNumber();
};

