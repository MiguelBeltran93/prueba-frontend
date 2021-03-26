export const formatToMoney = (value) => {
    if (!value) {
        value = 0;
    }
    return  (
        parseFloat(value).toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
};