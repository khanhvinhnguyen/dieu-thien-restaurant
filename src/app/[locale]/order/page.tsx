"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import "@/styles/order.css";
import "antd/dist/reset.css";

import { send } from "@/lib/sendEmailAction";
import { Validate } from "@/utils/validate";
import {
  Button,
  DatePicker,
  GetProps,
  Input,
  notification,
  TimePicker,
  Tooltip,
} from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const { TextArea } = Input;
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

type OrderForm = {
  userName: string;
  phone: string;
  orderDate: Date;
  orderTime: Date;
  email: string;
  notes: string;
};

const OrderPage = () => {
  const t = useTranslations();
  const localActive = useLocale();

  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm<OrderForm>();

  const openNotification = () => {
    notification.success({
      message: "Email Sent",
      description: "Your email has been sent successfully!",
      placement: "topRight",
    });
  };
  const onSubmit: SubmitHandler<OrderForm> = async (data) => {
    setLoading(true);
    const formData = new FormData();
    const formattedData = {
      ...data,
      orderDate: dayjs(data.orderDate).format("DD-MM-YYYY"),
      orderTime: dayjs(data.orderTime).format("HH:mm"),
    };

    Object.entries(formattedData).forEach(([key, value]) =>
      formData.append(key, value as string)
    );

    const result = await send(formData, localActive);
    if (result.success) {
      openNotification();
    }
    setLoading(false);
  };

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current < dayjs().startOf("day");
  };

  const disabledTime = (date) => {
    if (date && date.isSame(dayjs(), "day")) {
      const now = dayjs();
      const disabledHours = Array.from({ length: 24 }, (_, i) => i).slice(
        0,
        now.hour() + 1
      );
      const disabledMinutes = Array.from({ length: 60 }, (_, i) => i).slice(
        0,
        now.minute()
      );
      return {
        disabledHours: () => disabledHours,
        disabledMinutes: () => disabledMinutes,
      };
    }
    return {
      disabledHours: () => [],
      disabledMinutes: () => [],
    };
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
          <h1>{t("orderPage.orderNow")}</h1>
          <p>{t("orderPage.howToOrder")}</p>
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
              <p className="title">{t("orderPage.contactNow")}</p>
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
              <p className="title">{t("orderPage.feedback")}</p>
              <p className="content">dieuthien@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="order-content__right--form">
          <h2>{t("general.order")}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <Controller
                control={control}
                name="userName"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    autoComplete="off"
                    name="userName"
                    placeholder={t("form.userName") + " *"}
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
                  <Input
                    autoComplete="off"
                    type="number"
                    placeholder={t("general.phoneNumber") + " *"}
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
                rules={{ required: t("form.required") }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <DatePicker
                    disabledDate={disabledDate}
                    placeholder={t("form.orderDate") + " *"}
                    onBlur={onBlur}
                    value={value ? dayjs(value) : null}
                    onChange={(date) => onChange(date ? date.toDate() : null)}
                    format="YYYY-MM-DD"
                  />
                )}
              />

              <Controller
                control={control}
                name="orderTime"
                rules={{ required: t("form.required") }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TimePicker
                    placeholder={t("form.orderTime") + " *"}
                    use12Hours
                    format="h:mm a"
                    onBlur={onBlur}
                    value={value ? dayjs(value) : null}
                    onChange={onChange}
                    disabledTime={() =>
                      disabledTime(dayjs(getValues("orderDate")))
                    }
                  />
                )}
              />
            </div>
            <Tooltip title={errors.email?.message} open={!!errors.email}>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: t("form.required"),
                  validate: (value) =>
                    Validate.email(value) || t("form.invalidEmail"),
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    autoComplete="off"
                    placeholder={t("general.email") + " *"}
                    name="email"
                    required
                    onBlur={onBlur}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Tooltip>
            <Controller
              control={control}
              name="notes"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextArea
                  placeholder={t("form.comment")}
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
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="submit-btn"
            >
              {t("form.send")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
