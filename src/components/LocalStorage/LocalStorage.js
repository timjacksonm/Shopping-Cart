const LocalStorage = {
  storeData: (cartData) => {
    localStorage.setItem('cartData', JSON.stringify(cartData));
  },
  retrieveData: () => JSON.parse(localStorage.cartData),
  clearData: localStorage.clear(),
};

export default LocalStorage;
