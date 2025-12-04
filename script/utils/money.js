export function formatCurrency(priceCents){
    return(Math.round(priceCents) / 100).toFixed(2);//to decimal place

}
//default export
export default formatCurrency;