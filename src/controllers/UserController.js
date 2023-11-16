const modelUser = require('../models/user')

module.exports = {
  async findAll(req, res) {
    try {
      const users = await modelUser.findAll()
      if (!users || users.length === 0) {
        return res.status(400).json({ error: "Users not found" })
      }
      return res.json(users)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },

  async findById(req, res) {
    try {
      const user = await modelUser.findByPk(req.params.id)
      if (!user) {
        return res.status(400).json({ error: "User not found" })
      }
      return res.json(user)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },

  async create(req, res) {
    try {
      if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ error: "Name, email and password are required" })
      }

      const alreadyExists = await modelUser.findOne({ where: { email: req.body.email } })
      if (alreadyExists) {
        return res.status(400).json({ error: "User already exists" })
      }

      const user = await modelUser.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        createdAt: new Date(),
      })

      return res.status(201).json(user)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },

  async update(req, res) {
    try {
      const user = await modelUser.findByPk(req.body.id)
      if (!user) {
        return res.status(400).json({ error: "User not found" })
      }

      const update = await modelUser.update({
        name: req.body.name ? req.body.name : undefined,
        email: req.body.email ? req.body.email : undefined,
        password: req.body.password ? req.body.password : undefined,
        updateAt: new Date()
      }, { where: { id: req.body.id }})

      return res.json(update)
    } catch (error) {
      return res.status(500).json({ error: error.message })    
    }
  },

  async delete(req, res) {
    try {
      const user = await modelUser.findByPk(req.params.id)
      if (!user) {
        return res.status(400).json({ error: "User not found" })
      }

      const dell = await modelUser.destroy({where: { id: req.params.id }})

      return res.json(dell)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
