    function outerFn(innerFn) {
        innerFn();
    }


    var innerFn=function () {
        console.log("Hello World From Inner Function");
    }

    outerFn(innerFn);
