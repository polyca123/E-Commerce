const router = require('express').Router()
const { Tag, Product, ProductTag } = require('../models')

// The `/api/tags` endpoint

router.get('/tags', (req, res) => {
  // find all tags
  Tag.findAll({
    include: {
      model: Product,
      attribtues: ['product_name', 'product_price', 'product_stock', 'category_id']
    }
    // be sure to include its associated Product data
  })
    .then(tagData => res.json(tsgData))
    .catch(err => {
      console.log(err)
      res.sendStatus(200)
    })
})

router.get('/tags/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['product_name', 'product_price', 'product_stock', 'category_id']
    }
    // be sure to include its associated Product data
  })
    .then(tagData => res.json(tsgData))
    .catch(err => {
      console.log(err)
      res.sendStatus(200)
    })
})

router.post('/tags', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  },
    {
      where: {
        id: req.params.id
      }
    })
    .then(tagData => res.json(tsgData))
    .catch(err => {
      console.log(err)
      res.sendStatus(200)
    })
})

router.put('/tags/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name
  },
    {
      where: {
        id: req.params.id
      }
    })
    .then(tagData => res.json(tsgData))
    .catch(err => {
      console.log(err)
      res.sendStatus(200)
    })
})

router.delete('/tags/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(tagData => res.json(tsgData))
    .catch(err => {
      console.log(err)
      res.sendStatus(200)
    })
})

module.exports = router
