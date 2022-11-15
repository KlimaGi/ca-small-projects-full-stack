let productsData = [];

module.exports = {
  createProduct: (req, res) => {
    const { product } = req.body;
    productsData.push(product);
    res.send(productsData)
  },

  deleteProduct: (req, res) => {
    const { index } = req.params;
    const temp = productsData.filter((_, i) => i !== Number(index));
    productsData = temp;
    res.send({ productsData })
  }

} 