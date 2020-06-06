function functionLog(param) {
    console.log(param);
}

functionLog('Hello functionLog');

const constFunctionLog = function(param) {
    console.log(param);
}

constFunctionLog('Hello constFunctionLog');

const constArrowLog = (text) => {
    console.log(text);
}

constArrowLog('Hello constArrowLog');


const constSimplifiedArrowLog = (text) => console.log(text);

constSimplifiedArrowLog('Hello constSimplifiedArrowLog');