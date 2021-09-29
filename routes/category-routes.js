const router = require('express').Router()
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

router.get('/categories', (req, res) => {
  // find all categories
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'product_price', 'product_stock', 'category_id']
    }
    // be sure to include its associated Products
  })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err)
      res.sendStatus(200)
    })
})

router.get('/categories/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'product_price', 'product_stock', 'category_id']
    }
    // be sure to include its associated Products
  })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err)
      res.sendStatus(200)
    })
})

router.post('/categories', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err)
      res.sendStatus(200)
    })
})

router.put('/categories/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name
  },
    {
      where: {
        id: req.params.id
      }
    })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err)
      res.sendStatus(200)
    })
})

router.delete('/categories/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err)
      res.sendStatus(200)
    })
})

module.exports = router
