'use strict';

import express from 'express';
import OrderModel from '../models/bos/order'
const router = express.Router();

router.get('/payment/queryOrder', async (req, res, next) => {
  const id = req.query.merchantOrderNo;
  let order = await OrderModel.findOne({id});
  order.status_bar.title = '支付成功';
  await order.save();
  res.send({
    status: 0,
    type: 'PAY_SUCCESS',
    message: '支付成功',
  });
})

export default router;