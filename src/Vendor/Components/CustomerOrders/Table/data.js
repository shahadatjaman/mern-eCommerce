const date = {
  default_img:
    "https://res.cloudinary.com/dza2t1htw/image/upload/v1669218808/32173552_elulzk.jpg",
};

export default date;

export const OrderTable = {
  tableHead: [
    {
      id: 0,
      name: "Order ID",
    },
    {
      id: 1,
      name: "Customer",
    },
    {
      id: 2,
      name: "Order",
    },
    {
      id: 3,
      align: "center",
      name: "Delivery Date",
    },
    {
      id: 4,
      align: "center",
      name: "Delivery Pricing",
    },
    {
      id: 5,
      align: "center",
      name: "Delivery Status",
    },
    {
      id: 6,
      align: "center",
      name: "Payment",
    },
  ],
  tableBody: [
    {
      _id: 0,
      customerID: "#D6DFDDS1F",
      customerName: "Shahadat Jamn",
      avatar:
        "https://res.cloudinary.com/dza2t1htw/image/upload/v1674454377/s1hazktflv9bcebxbakw.jpg",
      order: "Nike Tishirt",
      date: "9 Oct 2023",
      price: "USD 40",
      status: "Pending",
      payment: "Paypal",
    },
    {
      _id: 0,
      customerID: "#DF4DF54DF",
      customerName: "Abu Jafor",
      avatar:
        "https://res.cloudinary.com/dza2t1htw/image/upload/v1673431982/rmuchjkezo5tx51accsk.jpg",
      order: "Nike Tishirt",
      date: "14 Jan 2023",
      price: "USD 50",
      status: "Pending",
      payment: "Paypal",
    },
    {
      _id: 0,
      customerID: "#S5F4DS5F4",
      customerName: "Abdul Kuddus",
      avatar:
        "https://res.cloudinary.com/dza2t1htw/image/upload/v1672831546/3_oy4iyb.jpg",
      order: "Nike Tishirt",
      date: "14 Fab 2023",
      price: "USD 540",
      status: "Pending",
      payment: "Paypal",
    },
  ],
};
