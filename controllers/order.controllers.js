//const Order = require("../models/order.models");


const createOrder = async (req, res) => {
    try {
    
  
      const newOrder = new Order({
       np;
        user: req.body.user._id,
      reference: { type: String, required: true, unique: true, index: true },
      items: [
        {
          product: { type: mongoose.Schema.Types.ObjectId, ref: "Product",required:true },
          quantity: { type: Number, min: 1, required: true },
          subTotal: { type: Number, min: 0, required: true },
        },
      ],
      address: { type: mongoose.Schema.Types.ObjectId, ref: "Adress",required: true},
      description: { type: String,required: true},

      total: { type: Number, min: 0, required: true },
      isPayed: { type: Boolean, default: false },
      
      adminConfirmation: {
        signature: { type: String, required: true },
        status: { type: String, default: "pending" },
        ConfirmationDate: { type: Date },

      },
       
       
      });
  
      const savedOrder = await newOrder.save();
      return res.status(201).json({ order: savedOrder });
    } catch (err) {
      return res.status(500).json({ err_message: err });
    }
  };