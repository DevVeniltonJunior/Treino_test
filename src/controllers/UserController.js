import User from "../models/user"

export default {
  async findAll(req, res) {
    try {
      const users = await User.findAll()
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
      const user = await User.findByPk(req.params.id)
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

      const alreadyExists = await User.findOne({ where: { email: req.body.email } })
      if (alreadyExists) {
        return res.status(400).json({ error: "User already exists" })
      }

      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        createdAt: new Date(),
      })

      return res.json(user)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },

  async update(req, res) {
    try {
      const user = await User.findByPk(req.body.id)
      if (!user) {
        return res.status(400).json({ error: "User not found" })
      } 
    } catch (error) {
      return res.status(500).json({ error: error.message })    
    }
  },

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.body.id)
      if (!user) {
        return res.status(400).json({ error: "User not found" })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
