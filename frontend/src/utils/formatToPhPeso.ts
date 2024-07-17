const formatToPhPeso = (number: number) => {
    return `${number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2,
    })}`;
};

export { formatToPhPeso };