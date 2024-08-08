const playF1 = () => {
    return "Playing the Game Formula 1";
};

const driveF1 = () => {
    return "Driving an F1 Car";
};

const tyreDegred = () => {
    return "Please slow down and collect the rubber";
};

export default playF1; //this is a default export // first export
export {driveF1,tyreDegred}; // yeh same chiz ko direct funtion mein bhi add kr sakte hai.

//Below are just a different way to export modules
/* export default function playF1  () {
    return "Playing the Game Formula 1";
};

export const driveF1 = () => {
    return "Driving an F1 Car";
};

export const tyreDegred = () => {
    return "Please slow down and collect the rubber";
}; */