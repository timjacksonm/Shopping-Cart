const LocalStorage = {
  storeData: (cartData) => {
    localStorage.setItem('cartData', JSON.stringify(cartData));
  },
  retrieveData: () => JSON.parse(localStorage.cartData),
};

export default LocalStorage;
