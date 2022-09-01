import Cart from 'src/models/Order';
import dbConnect from 'src/utils/dbConnect';

async function handlerAddCart(req, res) {
  await dbConnect();
  const { method } = req;
  const { userId, product } = req.body;
  try {
    switch (method) {
      case 'POST':
        const existCart = await Cart.findOne({ userId, product });
        if (existCart) {
          await Cart.findByIdAndUpdate(existCart._id, { $inc: { quantity: 1 } }, { new: true });
          return res.status(200).json({
            message: 'cập nhập số lượng thành công',
            code: 200,
          });
        }
        await Cart.create({
          userId,
          product,
        });
        return res.status(200).json({
          message: 'Thêm thành công sản phẩm vào giỏ hàng',
          code: 200,
        });
      default:
        return res.status(404).json({
          message: 'Không tìm thấy yêu cầu hợp lệ',
          code: 404,
        });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      code: 500,
    });
  }
}

export default handlerAddCart;