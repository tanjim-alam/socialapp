import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || "tanjim11alam@gmail.com", // SMTP username
    pass: process.env.SMTP_PASS || "cwwtqtyirmnsdceh1", // SMTP password
  },
});

export async function POST(req) {
  const { orderDetails } = await req.json();
  const orderDetailsRows = orderDetails.products
    .map(
      (product) => `
       <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">
                               <span>${product.serviceName}</span>
                               <div>
                               <span style="font-weight: bold; font-size:16px;">Link:</span>
                               <a href="${product.link}">${product.link}</a>
                               </div>
                            
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${
                          product.quantity
                        }</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">$ ${
                          product.price
                        }</td>
            
                    </tr>
    `
    )
    .join("");

  // Setup email data with inline styles
  let adminMailOptions = {
    from: '"TubeViews" tubeviewsmedia123@gmail.com',
    to: "tanjim11alam@gmail.com",
    subject: "New Order Received",
    html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="background-color: #058e3d; padding: 16px; color: white; text-align: center;">New Order #${orderDetails.id}</h2>
            <div style="border: 1px solid #ddd; padding: 8px;">
            <div>
            <p>You've received the following order from ${orderDetails.billingDetails.name}</p>
            <div style="display: flex; align-items:center; color: #058e3d;">
            <p style="font-size:16px;">[Order #${orderDetails.id}]</p>
            <p style="font-size:16px; font-weight: bold;">(${orderDetails.date})</p>
            </div>
            <table style="border-collapse: collapse; width: 100%;">
                <thead>
                    <tr style="background-color: #f2f2f2;">
                        <th style="border: 1px solid #ddd; padding: 8px;">Product Name</th>
                        <th style="border: 1px solid #ddd; padding: 8px;">Quantity</th>
                        <th style="border: 1px solid #ddd; padding: 8px;">Price</th>
                    </tr>
                </thead>
                <tbody>
                ${orderDetailsRows}
                </tbody>
            </table>
            <div style="margin-top: 16px; border: 1px solid #ddd;">
                <div style="display: flex; justify-content: space-between; padding: 0px 16px;">
                    <p style="font-weight: bold; width: 50%; border-right:2px solid black; font-size:18px;">Total</p>
                    <p style="width: 50%; text-align: right; font-size:18px;">$ ${orderDetails.totalPrice}</p>
                </div>
            </div>

            <div style="margin-top: 16px;">
            <h3 style="color: #058e3d;">Billing Details</h3>
                <div style="border: 1px solid #ddd; padding:3px;">
                <div style=" padding: 0 6px;">
                    <p>${orderDetails.billingDetails.name}</p>
                    <p>${orderDetails.billingDetails.email}</p>
                    <p>${orderDetails.billingDetails.country}</p>
                </div>
                </div>
            </div>

            <div style="margin-top: 16px;">
            <h3 style="color: #058e3d;">Addition Info</h3>
                <div style="border: 1px solid #ddd; padding: 0px 10px;">
                <p>
                ${orderDetails.billingDetails.message}
                </p>
                </div>
            </div>
            </div>
            </div>
        </div>
        `, // HTML body with inline styles
  };

  const userOrderRow = orderDetails.products.map(
    (product) => `
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #dddddd;">
                                    <span style="margin-top: 10px;"><strong>Link:</strong> <a href="${
                                      product.link
                                    }" style="color: #058e3d; text-decoration: none;">${
      product.link
    }</a></span>
                                </td>
                                <td style="text-align: right; padding: 10px; border-bottom: 1px solid #dddddd;">${
                                  product.quantity
                                }</td>
                                <td style="text-align: right; padding: 10px; border-bottom: 1px solid #dddddd;">$ ${
                                  product.price
                                }</td>
                            </tr>
        `
  );

  let userMailOptions = {
    from: '"TubeViews" tubeviewsmedia123@gmail.com', // sender address
    to: orderDetails.billingDetails.email, // list of receivers
    subject: "Order Successfully", // Subject line
    html: `
            <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: black; box-sizing: border-box; width: 100%;">
                <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);">
                    <div style="border-bottom: 1px solid #dddddd; display: flex; justify-content: space-between; align-items: center; padding: 10px 35% 10px;">
                        <div style="display: flex; justify-content: center; align-items: center;">
                            <span style="font-size: 30px; font-weight: bold; padding: 0px 4px; background-color: #1e3a8a"><span style="color: white;">SOCIALIZE</span><span style="background-color: white; color: #1e3a8a; padding: 0px 4px;">Club</span></span>
                        </div>
                        
                    </div>
                    <div style="padding: 20px;">
                        <div style="text-align: center; padding: 10px 0;">
                            <h1 style="color: #4CAF50; margin: 0;">Thank You for Your Order!</h1>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: center;">
                            <p style="color: white; background-color: #d33; width: fit-content; padding: 10px 30px; border-radius: 40px; font-size: 20px; text-align:center;">
                                Order Number: <strong>#${orderDetails?.id}</strong>
                            </p>
                        </div>
                        <div style="border-bottom: 1px solid #dddddd; margin: 20px 0;"></div>
                        <h2 style="color: #4CAF50;">Order Details</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <th style="text-align: left; padding: 10px; border-bottom: 1px solid #dddddd;">Product</th>
                                <th style="text-align: right; padding: 10px; border-bottom: 1px solid #dddddd;">Quantity</th>
                                <th style="text-align: right; padding: 10px; border-bottom: 1px solid #dddddd;">Price</th>
                            </tr>
                            ${userOrderRow}
                            <tr>
                                <td style="padding: 10px;"></td>
                                <td style="text-align: right; padding: 10px; border-top: 1px solid #dddddd;">Subtotal:</td>
                                <td style="text-align: right; padding: 10px; border-top: 1px solid #dddddd;">$ ${orderDetails.totalPrice}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px;"></td>
                                <td style="text-align: right; padding: 10px; border-top: 1px solid #dddddd; font-weight: bold;">Total:</td>
                                <td style="text-align: right; padding: 10px; border-top: 1px solid #dddddd; font-weight: bold;">$ ${orderDetails.totalPrice}</td>
                            </tr>
                        </table>
                        <div style="border-bottom: 1px solid #dddddd; margin: 20px 0;"></div>
                        <h2 style="color: #4CAF50;">Shipping Information</h2>
                        <p style="color: #555555;">
                            ${orderDetails.billingDetails.name}<br>
                            ${orderDetails.billingDetails.email}<br>
                            ${orderDetails.billingDetails.country}
                        </p>
                        <div style="border-bottom: 1px solid #dddddd; margin: 20px 0;"></div>
                        <h2 style="color: #4CAF50;">Need Help?</h2>
                        <p style="color: #555555;">
                            If you have any questions about your order, please contact our customer service team at <a href="mailto:support@yourstore.com" style="color: #4CAF50; text-decoration: none;">support@tubeviews.com</a>.
                        </p>
                    </div>
                    <div style="text-align: center; background-color: #d33; padding: 10px;">
                        <p style="color: white; margin: 0;">&copy; 2024 Tubeviews. All rights reserved.</p>
                    </div>
                </div>
            </div>
        `, // HTML body with inline styles
  };

  try {
    // Send mail with defined transport object
    let userInfo = await transporter.sendMail(userMailOptions);
    // Send mail to the admin
    let adminInfo = await transporter.sendMail(adminMailOptions);
    return new Response(
      JSON.stringify({ message: "Emails sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
    });
  }
}
