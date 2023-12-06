const matchingRegex = /(?=(one|two|three|four|five|six|seven|eight|nine|[1-9]))/gi;

const mapper = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
};

const parser = (toBeParsed) => {
    if(mapper[toBeParsed]) {
        return mapper[toBeParsed];
    }

    return toBeParsed;
}

const getCalibration = (calibration) => {

    const matchingArray = [...calibration.matchAll(matchingRegex)];

    // console.log(matchingArray);

    const firstNumber = parser(matchingArray[0][1]);
    const secondNumber = parser(matchingArray[matchingArray.length - 1][1]);

    return parseInt(firstNumber) * 10 + parseInt(secondNumber);
}

const calculateCalibration = (data = data) => {
    const calibrationLines = data.split('\n');

    const sum = calibrationLines.reduce((acc, calibration) => {
        const calibrationValue = getCalibration(calibration);

        return acc + calibrationValue;
    }, 0)

    return sum;
}