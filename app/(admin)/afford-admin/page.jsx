'use client';
export const dynamic = 'force-dynamic';
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from 'next/navigation';
import { useModalStore } from "@/store/modalStore";

export default function ManageCategoryData() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const OrderNo = searchParams.get("OrderNo");
  const statusSteps = ["Pending", "Confirmed", "Processing", "Ready To Ship", "Delivered"];

  const [orderDetail, setOrderDetail] = useState(null);
  const [orderHistoryDetail, setOrderHistoryDetail] = useState([]);
  const [orderHistoryItemDetail, setOrderHistoryItemDetail] = useState([]);
  const [addressDetail, setAddressDetail] = useState({});
  const [orderstatus, setOrderstatus] = useState([]);
  const [loading, setLoading] = useState(true);
  const openUpdateStatus = useModalStore((state) => state.openUpdateStatus)
  const closeUpdateStatus = useModalStore((state) => state.closeUpdateStatus)
  const isUpdateStatusOpen = useModalStore((state) => state.isUpdateStatusOpen)
  const username = process.env.NEXT_PUBLIC_BASIC_AUTH_USER;
  const password = process.env.NEXT_PUBLIC_BASIC_AUTH_PASS;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const authHeader = "Basic " + btoa(`${username}:${password}`);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(`${apiUrl}/auth/check-login`, {
          withCredentials: true,
        });

        if (response?.data?.loggedIn) {
          fetchOrderDataByOrderNo();
        } else {
          router.push("/afford-admin/login");
        }
      } catch (error) {
        console.error("Login check failed:", error);
        router.push("/afford-admin/login");
      }
    };

    checkLoginStatus();
  }, [router]);

  const fetchOrderDataByOrderNo = async () => {
    try {
      const res = await axios.get(`${apiUrl}/order-data`, {
        headers: { Authorization: authHeader },
        params: { OrderNo },
      });

      const data = res.data?.data;
      if (!data || Object.keys(data).length === 0) {
        router.replace("/afford-admin/manage-customer-order");
        return;
      }

      setOrderDetail(data.order);
      setOrderHistoryDetail(data.products || []);
      setOrderHistoryItemDetail(res.data.data.itemDetails || []);
      setAddressDetail(data.shippingAddress || {});
      setOrderstatus(data.statusHistory || []);
    } catch (error) {
      console.error("Error fetching order data:", error);
      router.replace("/afford-admin/manage-customer-order");
    } finally {
      setLoading(false);
    }
  };

  if (loading || !orderDetail) {
    return <p className="text-center py-10">Loading order details...</p>;
  }

  return (
    <>
      <main>
        <div className="main-wrap">
          <div className="title">
            <h4>Order Details</h4>
          </div>

          <div className="aside-right orderD-right">
            <div className="aside-right-wrap">
              <div className="order_details_wrapper">
                {/* Order Summary */}
                <div className="flex order_id_wrp">
                  <div className="order_id">
                    <p className="id">{orderDetail.OrderNo}</p>
                    <p>
                      Order on{" "}
                      {new Date(orderDetail.OrderDate).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="pdfs">
                    <div className="tooltip">
                      <a href="" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="none"><path stroke="#666" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.792 21.25h8.416a3.5 3.5 0 0 0 3.5-3.5v-5.53a3.5 3.5 0 0 0-1.024-2.475l-5.969-5.97A3.5 3.5 0 0 0 10.24 2.75H7.792a3.5 3.5 0 0 0-3.5 3.5v11.5a3.5 3.5 0 0 0 3.5 3.5"></path><path fill="#666" fillRule="evenodd" d="M10.437 7.141c-.239.078-.392.236-.436.411c-.09.352 0 .73.253 1.203c.126.234.28.471.45.725l.092.137l.145.215l.019-.068l.086-.306q.148-.503.23-1.02c.089-.642-.011-1.018-.309-1.26c-.08-.065-.278-.119-.53-.037m.055 4.152l-.27-.362l-.032-.048c-.115-.19-.243-.38-.382-.585l-.1-.149a10 10 0 0 1-.512-.828c-.31-.578-.558-1.286-.358-2.067c.17-.664.698-1.081 1.227-1.254c.517-.168 1.174-.147 1.66.247c.792.644.848 1.573.739 2.357a9 9 0 0 1-.261 1.174l-.096.34q-.112.382-.208.769l-.067.194l1.392 1.864c.65-.078 1.364-.125 2.03-.077c.769.054 1.595.242 2.158.776a1.56 1.56 0 0 1 .395 1.441c-.117.48-.454.88-.919 1.123c-.985.515-1.902.105-2.583-.416c-.533-.407-1.045-.975-1.476-1.453l-.104-.114c-.37.057-.72.121-1.004.175c-.305.057-.684.128-1.096.22l-.151.443q-.125.288-.238.58l-.122.303a8 8 0 0 1-.427.91c-.33.578-.857 1.192-1.741 1.241c-1.184.066-1.986-.985-1.756-2.108l.006-.027c.2-.791.894-1.31 1.565-1.653c.597-.306 1.294-.532 1.941-.701zm.87 1.165l-.287.843l.421-.08l.004-.001l.38-.07zm2.84 1.604c.274.29.547.56.831.777c.55.42.94.493 1.299.305c.2-.105.284-.241.309-.342a.35.35 0 0 0-.08-.309c-.257-.228-.722-.38-1.392-.428a8 8 0 0 0-.967-.003m-5.005.947c-.318.109-.62.23-.89.368c-.587.3-.87.604-.944.867c-.078.415.192.673.516.655c.27-.015.506-.184.766-.639q.204-.372.358-.767l.107-.266z" clipRule="evenodd"></path></g></svg></a>
                      <div className="content">
                        Performa Invoice
                      </div>
                    </div>
                    <div className="tooltip">
                      <a href="" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="none"><path stroke="#666" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.792 21.25h8.416a3.5 3.5 0 0 0 3.5-3.5v-5.53a3.5 3.5 0 0 0-1.024-2.475l-5.969-5.97A3.5 3.5 0 0 0 10.24 2.75H7.792a3.5 3.5 0 0 0-3.5 3.5v11.5a3.5 3.5 0 0 0 3.5 3.5"></path><path fill="#666" fillRule="evenodd" d="M10.437 7.141c-.239.078-.392.236-.436.411c-.09.352 0 .73.253 1.203c.126.234.28.471.45.725l.092.137l.145.215l.019-.068l.086-.306q.148-.503.23-1.02c.089-.642-.011-1.018-.309-1.26c-.08-.065-.278-.119-.53-.037m.055 4.152l-.27-.362l-.032-.048c-.115-.19-.243-.38-.382-.585l-.1-.149a10 10 0 0 1-.512-.828c-.31-.578-.558-1.286-.358-2.067c.17-.664.698-1.081 1.227-1.254c.517-.168 1.174-.147 1.66.247c.792.644.848 1.573.739 2.357a9 9 0 0 1-.261 1.174l-.096.34q-.112.382-.208.769l-.067.194l1.392 1.864c.65-.078 1.364-.125 2.03-.077c.769.054 1.595.242 2.158.776a1.56 1.56 0 0 1 .395 1.441c-.117.48-.454.88-.919 1.123c-.985.515-1.902.105-2.583-.416c-.533-.407-1.045-.975-1.476-1.453l-.104-.114c-.37.057-.72.121-1.004.175c-.305.057-.684.128-1.096.22l-.151.443q-.125.288-.238.58l-.122.303a8 8 0 0 1-.427.91c-.33.578-.857 1.192-1.741 1.241c-1.184.066-1.986-.985-1.756-2.108l.006-.027c.2-.791.894-1.31 1.565-1.653c.597-.306 1.294-.532 1.941-.701zm.87 1.165l-.287.843l.421-.08l.004-.001l.38-.07zm2.84 1.604c.274.29.547.56.831.777c.55.42.94.493 1.299.305c.2-.105.284-.241.309-.342a.35.35 0 0 0-.08-.309c-.257-.228-.722-.38-1.392-.428a8 8 0 0 0-.967-.003m-5.005.947c-.318.109-.62.23-.89.368c-.587.3-.87.604-.944.867c-.078.415.192.673.516.655c.27-.015.506-.184.766-.639q.204-.372.358-.767l.107-.266z" clipRule="evenodd"></path></g></svg></a>
                      <div className="content">
                        Shipment
                      </div>
                    </div>
                    <div className="tooltip">
                      <a href="" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="none"><path stroke="#666" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.792 21.25h8.416a3.5 3.5 0 0 0 3.5-3.5v-5.53a3.5 3.5 0 0 0-1.024-2.475l-5.969-5.97A3.5 3.5 0 0 0 10.24 2.75H7.792a3.5 3.5 0 0 0-3.5 3.5v11.5a3.5 3.5 0 0 0 3.5 3.5"></path><path fill="#666" fillRule="evenodd" d="M10.437 7.141c-.239.078-.392.236-.436.411c-.09.352 0 .73.253 1.203c.126.234.28.471.45.725l.092.137l.145.215l.019-.068l.086-.306q.148-.503.23-1.02c.089-.642-.011-1.018-.309-1.26c-.08-.065-.278-.119-.53-.037m.055 4.152l-.27-.362l-.032-.048c-.115-.19-.243-.38-.382-.585l-.1-.149a10 10 0 0 1-.512-.828c-.31-.578-.558-1.286-.358-2.067c.17-.664.698-1.081 1.227-1.254c.517-.168 1.174-.147 1.66.247c.792.644.848 1.573.739 2.357a9 9 0 0 1-.261 1.174l-.096.34q-.112.382-.208.769l-.067.194l1.392 1.864c.65-.078 1.364-.125 2.03-.077c.769.054 1.595.242 2.158.776a1.56 1.56 0 0 1 .395 1.441c-.117.48-.454.88-.919 1.123c-.985.515-1.902.105-2.583-.416c-.533-.407-1.045-.975-1.476-1.453l-.104-.114c-.37.057-.72.121-1.004.175c-.305.057-.684.128-1.096.22l-.151.443q-.125.288-.238.58l-.122.303a8 8 0 0 1-.427.91c-.33.578-.857 1.192-1.741 1.241c-1.184.066-1.986-.985-1.756-2.108l.006-.027c.2-.791.894-1.31 1.565-1.653c.597-.306 1.294-.532 1.941-.701zm.87 1.165l-.287.843l.421-.08l.004-.001l.38-.07zm2.84 1.604c.274.29.547.56.831.777c.55.42.94.493 1.299.305c.2-.105.284-.241.309-.342a.35.35 0 0 0-.08-.309c-.257-.228-.722-.38-1.392-.428a8 8 0 0 0-.967-.003m-5.005.947c-.318.109-.62.23-.89.368c-.587.3-.87.604-.944.867c-.078.415.192.673.516.655c.27-.015.506-.184.766-.639q.204-.372.358-.767l.107-.266z" clipRule="evenodd"></path></g></svg></a>
                      <div className="content">
                        Packing Slip
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Status */}
                <div className="order_status">
                  <ul className="order_time">
                    {statusSteps.map((step, index) => {
                      const matched = orderstatus.find(
                        (s) => s.OrderStatus?.toLowerCase() === step.toLowerCase()
                      );
                      const isActive = Boolean(matched);
                      return (
                        <li key={index} className={isActive ? "active" : ""}>
                          <span>{step}</span>
                          <div className="dot"></div>
                          <p>
                            {isActive
                              ? new Date(matched.PostedDate).toLocaleDateString("en-GB", {
                                weekday: "short",
                                day: "numeric",
                                month: "short",
                              })
                              : ""}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Product List */}
                <div className="prod_content">
                  {orderHistoryDetail && orderHistoryDetail.length > 0 ? (
                    orderHistoryDetail.map((item, index) => {
                      const sizeDetails = orderHistoryItemDetail.filter(detail => detail.CustomerOrderHistoryID === item.CustomerOrderHistoryID);

                      return (
                        <div className="pro_item" key={index}>
                          <figure>
                            <Image src={`/OnlineImages/ProductImages/${item.ProductImage}`} width="64" height="70" alt={item.ProductURL} title={item.ProductName}></Image>
                          </figure>
                          <div className="pro_details">
                            <p className="pro_name">{item.ProductName}</p>
                            {sizeDetails.length > 0 && (
                              <p className="size">
                                Size :
                                {sizeDetails.map((size, i) => (
                                  <span key={i}>
                                    {size.ProductSize}:{size.ProductQuantity}
                                    {i < sizeDetails.length - 1 && ', '}
                                  </span>
                                ))}
                              </p>
                            )}
                          </div>
                          <div className="emd_logo">
                            <Image src="/assets/images/checkout/emb_logo.png" width="128" height="47" alt="Embroidery Logo"></Image>
                          </div>
                          <div className="item_total">
                            <div className="pro_price">
                              <p>Item Price</p>
                              <span>₹ {item.ProductSalePrice}.00</span>
                            </div>
                            <div className="quantity">
                              <p>Quantity</p>
                              <span>{item.ProductQuantity}</span>
                            </div>
                            <div className="total_price">
                              <p>Total</p>
                              <span>₹ {item.ProductTotalAmount}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : ""}
                </div>

                {/* Address + Summary */}
                <div className="address_details">
                  <div className="colA">
                    <p className="title">Delivery Address</p>
                    <p className="user_name">{addressDetail.CustomerOrderShippingAddressName}</p>
                    <p className="address">
                      {[
                        addressDetail.CustomerOrderShippingAddressFullAddress,
                        addressDetail.CustomerOrderShippingAddressLocality,
                        addressDetail.CustomerOrderShippingAddressCity,
                        addressDetail.CustomerOrderShippingAddressState,
                      ]
                        .filter(Boolean)
                        .join(", ")}{" "}
                      - {addressDetail.CustomerOrderShippingAddressPinCode}
                    </p>
                    <p>
                      Mobile:{" "}
                      <Link href={`tel:+91${addressDetail.CustomerOrderShippingAddressPhoneNo}`}>
                        +91-{addressDetail.CustomerOrderShippingAddressPhoneNo}
                      </Link>
                    </p>
                    <p>
                      Email:{" "}
                      <Link href={`mailto:${addressDetail.CustomerOrderShippingAddressEmailID}`}>
                        {addressDetail.CustomerOrderShippingAddressEmailID}
                      </Link>
                    </p>
                  </div>
                  <div className="colA">
                    <p className="title">Delivery Address</p>
                    <p className="user_name">{addressDetail.CustomerOrderShippingAddressName}</p>
                    <p className="address">
                      {[
                        addressDetail.CustomerOrderShippingAddressFullAddress,
                        addressDetail.CustomerOrderShippingAddressLocality,
                        addressDetail.CustomerOrderShippingAddressCity,
                        addressDetail.CustomerOrderShippingAddressState,
                      ]
                        .filter(Boolean)
                        .join(", ")}{" "}
                      - {addressDetail.CustomerOrderShippingAddressPinCode}
                    </p>
                    <p>
                      Mobile:{" "}
                      <Link href={`tel:+91${addressDetail.CustomerOrderShippingAddressPhoneNo}`}>
                        +91-{addressDetail.CustomerOrderShippingAddressPhoneNo}
                      </Link>
                    </p>
                    <p>
                      Email:{" "}
                      <Link href={`mailto:${addressDetail.CustomerOrderShippingAddressEmailID}`}>
                        {addressDetail.CustomerOrderShippingAddressEmailID}
                      </Link>
                    </p>
                  </div>
                  <div className="colB">
                    <p className="title">Order Summary</p>
                    <ul className="summary_details">
                      <li>
                        <p>Subtotal</p>
                        <span>
                          ₹{" "}
                          {orderHistoryDetail
                            .reduce((sum, item) => sum + parseFloat(item.ProductTotalAmount || 0), 0)
                            .toFixed(2)}
                        </span>
                      </li>
                      <li>
                        <p>Coupon</p>
                        <span>-₹{orderDetail.CouponValue || 0}.00</span>
                      </li>
                      <li>
                        <p>Shipping</p>
                        <span>₹{orderDetail.ShippingCharges || 0}.00</span>
                      </li>
                      <li>
                        <p>6% CGST</p>
                        <span>₹ {(orderDetail.GSTAmount / 2).toFixed(2)}</span>
                      </li>
                      <li>
                        <p>6% IGST</p>
                        <span>₹ {(orderDetail.GSTAmount / 2).toFixed(2)}</span>
                      </li>
                      <li>
                        <p>Total GST</p>
                        <span>₹{orderDetail.GSTAmount}.00</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Txn & Total */}
                <div className="order_id_stats">
                  <ul>
                    <li>
                      <p>Txn ID :</p>
                      <span>{orderDetail.TransactionID}</span>
                    </li>
                    <li>
                      <p>Status : </p>
                      <span>{orderDetail.TransactionStatus}</span>
                    </li>
                  </ul>
                  <p>
                    Total Price <span>₹ {orderDetail.OrderTotalAmount}.00</span>
                  </p>
                </div>

                {/* Invoice */}
                <div className="btn_wrapper flex-gap-2 flex justify-end">
                  <button className="btn gray_border medium">Get Invoice</button>
                  <button className="btn gray_border medium" onClick={openUpdateStatus}>Update Status</button>
                </div>
              </div>
            </div>
            {/* <div className="aside-right-wrap">
              <div className="status_update">
                <div className="title">
                  <h4>Update Status</h4>
                </div>
                <div className="flex">
                  <div className="editor">
                    <h2>Order Status Note</h2>
                    <div className="form-group">
                      <textarea className="form-control"></textarea>
                    </div>
                  </div>
                  <div className="dropdown">
                    <h2>Status</h2>
                    <div className="form-group">
                      <select className="form-control small">
                        <option>Process</option>
                        <option>Process 2</option>
                        <option>Process 3</option>
                        <option>Process 4</option>
                      </select>
                    </div>
                    <button type="button" className="btn medium">Update Status</button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </main>
      <div className={`model status-pop ${isUpdateStatusOpen ? "is-open" : ""}`}>
        <button className="close" onClick={closeUpdateStatus}><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
        <div className="model-body">
          <h6>Update Status</h6>
          <div className="form-group">
            <label>Status</label>
            <select className="form-control small">
              <option>Update Option</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </div>
          <div className="form-group">
            <label>Order Status Note</label>
            <textarea className="form-control"></textarea>
          </div>
          <div className="btn_wrapper">
            <button type="button" className="btn black_fill medium">Update Status</button>
          </div>
        </div>
      </div>
    </>
  );
}
