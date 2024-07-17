const generateY = () => {
    const num1 = Math.floor(Math.random() * 51) + 30;
    const num2 = 100 - num1;
    console.log(num1);

    return [num1, num2];
}
const generateX = () => {
    const num1 = Math.floor(Math.random() * 51) + 25;
    const num2 = 100 - num1;
    
    return [num1, num2];
}
const generateRandomBorder = () => {
    const tValue = generateY();
    const rValue = generateX();
    const bValue = generateY();
    const lValue = generateX();

    return `${tValue[0]}% ${tValue[1]}% ${bValue[0]}% ${bValue[1]}% / ${lValue[0]}% ${rValue[0]}% ${rValue[1]}% ${lValue[1]}%`;
}

export default generateRandomBorder;