const express = require('express')
const router = express.Router()
const {createPost}= require('../controllers/post')
router.post('/create-post, createPost')
const post = require('../models/post.model')
const m = require('../helpers/middlewares')
// Routes

router.get('/', async (req, res) => {
    await post.getPosts()
        .then(posts => res.json(posts))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})

router.get('/:id', m.mustBeInteger, async (req, res) => {
    const id = req.params.id
    await post.getPost(id)
        .then(post => res.json(post))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})

router.post('/', m.checkFieldsPost, async (req, res) => {
    await post.insertPost(req.body)
        .then(post => res.status(201).json({
            message: `The post #${post.id} has been created`,
            content: post
        }))
        .catch(err => res.status(500).json({ message: err.message }))
})

router.put('/:id', m.mustBeInteger, m.checkFieldsPost, async (req, res) => {
    const id = req.params.id
    await post.updatePost(id, req.body)
        .then(post => res.json({
            message: `The post #${id} has been updated`,
            content: post
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
})

router.delete('/:id', m.mustBeInteger, async (req, res) => {
    const id = req.params.id

    await post.deletePost(id)
        .then(post => res.json({
            message: `The post #${id} has been deleted`
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
})

router.post('/create-post', createPost)

module.exports = router