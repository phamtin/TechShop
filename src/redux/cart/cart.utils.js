export const handleAddItem = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(item => item.id === itemToAdd.id);
  if (existingItem) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const handleQuantity = (cartItems, increasedItem, type) => {
  if (type === "inc") {
    return cartItems.map(item =>
      item.id === increasedItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else if (type === "dec") {
    if (increasedItem.quantity > 1) {
      return cartItems.map(item =>
        item.id === increasedItem.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    } else if (increasedItem.quantity === 1) {
      return cartItems.filter(item => item.id !== increasedItem.id);
    }
  }
};
