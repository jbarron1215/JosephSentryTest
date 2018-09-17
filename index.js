Raven.config('https://d9f004e7510c4ef78c9968867160fde0@sentry.io/1282634', {
    ignoreErrors: [
        /filtered/gm
    ]
}).install()

filteredError();


function declaredFunctionError () {
    throw new Error("Declared function error...");
}

const anonymousFunctionError = () => {
    throw new Error("Anonymous function error...");
}

function loopError () {
    for (var i = 0; i < 1000; i++) {
        setTimeout(() => {
            throw new Error("Loop error...");
        })
    }
}

function nestedFunctionError () {
    function nestedFunctionA () {
        function nestedFunctionB () {
            throw new Error("Nested function error...");
        }

        nestedFunctionB();
    }

    nestedFunctionA();
}

function filteredError () {
    throw new Error("This error should be filtered!");
}