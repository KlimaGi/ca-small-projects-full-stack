let productsData = [];

module.exports = {
  createProduct: (req, res) => {
    const { product } = req.body;
    console.log('req.body-create-product', product);

    productsData.push(product);
    res.send(productsData)
  },

  deleteProduct: (req, res) => {
    const { product: productname, index } = req.params;
    const temp = productsData.filter((product, i) => product.product !== productname && i !== index);
    productsData = temp;

    res.send({ productsData })
  }

}