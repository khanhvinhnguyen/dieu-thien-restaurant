"use client";
import React from "react";
import Image from "next/image";
import { Controller, useForm, SubmitHandler } from "react-hook-form";

import "@/styles/order.css";
import { send } from "@/lib/sendEmailAction";

type OrderForm = {
  userName: string;
  phone: string;
  orderDate: Date;
  orderTime: Date;
  email: string;
  notes: string;
};

const OrderPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<OrderForm>();
  const onSubmit: SubmitHandler<OrderForm> = (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value instanceof Date ? value.toISOString() : value);
    });

    send(formData);
  };

  return (
    <div className="order-page">
      <img
        src={"/images/bg-order.svg"}
        alt={"order"}
        width={0}
        height={0}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
      <div className="order-content">
        <div className="order-content__left--info">
          <h1>Đặt bàn ngay!</h1>
          <p>
            Gọi ngay cho chúng tôi qua số điện thoại hoặc điền vào phiếu đặt bàn
            phía bên phải, sẽ có nhân viên tư vấn hỗ trợ cho bạn.
          </p>
          <div className="column-container" style={{ gap: "1rem" }}>
            <div className="text--border order-content--contact">
              <div className="avatar order-content--icon">
                <img
                  className=""
                  src="/icons/phoneIco.svg"
                  alt="avatar"
                  sizes="70"
                />
              </div>
              <p className="title">Liên hệ ngay</p>
              <p className="content">085-677-9886</p>
            </div>

            <div className="text--border order-content--contact">
              <div className="avatar order-content--icon">
                <img
                  className=""
                  src="/icons/messengerIco.svg"
                  alt="avatar"
                  sizes="70"
                />
              </div>
              <p className="title">Phản hồi</p>
              <p className="content">dieuthien@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="order-content__right--form">
          <h2>Đặt bàn</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <Controller
                control={control}
                name="userName"
                render={({ field: { onChange, onBlur, value } }) => (
                  <input
                    placeholder="Tên khách hàng *"
                    name="userName"
                    onBlur={onBlur}
                    value={value}
                    onChange={onChange}
                    required
                  />
                )}
              />

              <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, onBlur, value } }) => (
                  <input
                    placeholder="Số điện thoại *"
                    name="phone"
                    required
                    onBlur={onBlur}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            <div className="form-row">
              <Controller
                control={control}
                name="orderDate"
                render={({ field: { onChange, onBlur } }) => (
                  <input
                    placeholder="Ngày đặt bàn *"
                    name="orderDate"
                    required
                    onBlur={onBlur}
                    onChange={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="orderTime"
                render={({ field: { onChange, onBlur } }) => (
                  <input
                    placeholder="Giờ đặt bàn *"
                    name="orderTime"
                    required
                    onBlur={onBlur}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <input
                  placeholder="Email *"
                  name="email"
                  required
                  onBlur={onBlur}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="notes"
              render={({ field: { onChange, onBlur, value } }) => (
                <textarea
                  placeholder="Ghi chú"
                  name="notes"
                  cols={30}
                  rows={10}
                  onBlur={onBlur}
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            {/* {errors && <span>This field is required</span>} */}
            <input className="submit-btn" type="submit" value="Gửi phiếu" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
