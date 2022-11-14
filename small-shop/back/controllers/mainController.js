let productsData = [];

module.exports = {
  createProduct: (req, res) => {
    const { product } = req.body;
    console.log('req.body-create-product', product);

    productsData.push(product);
    console.log('productsData', productsData);
    res.send(productsData)
  },

  deleteProduct: (req, res) => {
    const { product: productname, index } = req.params;
    const temp = productsData.filter((product, i) => i !== Number(index));
    productsData = temp;
    console.log('temp', temp);
    res.send({ productsData })
  }

}