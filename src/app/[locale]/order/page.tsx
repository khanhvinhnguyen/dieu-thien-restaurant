"use client";
import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import "@/styles/order.css";

import { send } from "@/lib/sendEmailAction";
import { Validate } from "@/utils/validate";

import {
  Button,
  TextField,
  Box,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
  const today = dayjs();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isTimeValid, setIsTimeValid] = useState(true);

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
  } = useForm<OrderForm>();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
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
      setOpen(true);
    }
    setLoading(false);
  };

  const disabledTime = (date: dayjs.Dayjs) => {
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

  const orderDate = watch("orderDate");
  const orderTime = watch("orderTime");

  useEffect(() => {
    if (orderDate && orderTime) {
      const selectedDateTime = dayjs(orderDate)
        .set("hour", dayjs(orderTime).hour())
        .set("minute", dayjs(orderTime).minute());
      setIsTimeValid(selectedDateTime.isAfter(dayjs()));
    }
  }, [orderDate, orderTime]);

  return (
    <div className="order-page">
      <div className="order-content">
        <div className="order-content__left--info">
          <h1>{t("orderPage.orderNow")}</h1>
          <p>{t("orderPage.howToOrder")}</p>
          <div className="column-container" style={{ gap: "1rem" }}>
            <div className="text--border order-content--contact">
              <div className="avatar order-content--icon">
                <Image
                  className=""
                  src="/icons/phoneIco.svg"
                  alt="avatar"
                  sizes="70"
                  width={70}
                  height={70}
                />
              </div>
              <p className="title">{t("orderPage.contactNow")}</p>
              <p className="content">085-677-9886</p>
            </div>

            <div className="text--border order-content--contact">
              <div className="avatar order-content--icon">
                <Image
                  className=""
                  src="/icons/messengerIco.svg"
                  alt="avatar"
                  sizes="70"
                  width={70}
                  height={70}
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
                  <TextField
                    autoComplete="off"
                    name="userName"
                    placeholder={t("form.userName")}
                    label={t("form.userName")}
                    onBlur={onBlur}
                    value={value}
                    onChange={onChange}
                    required
                    fullWidth
                  />
                )}
              />

              <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    autoComplete="off"
                    type="number"
                    label={t("general.phoneNumber")}
                    placeholder={t("general.phoneNumber")}
                    name="phone"
                    required
                    onBlur={onBlur}
                    value={value}
                    onChange={onChange}
                    InputProps={{
                      inputProps: {
                        min: 0,
                      },
                    }}
                    fullWidth
                  />
                )}
              />
            </div>
            <Box className="form-row">
              <Controller
                control={control}
                name="orderDate"
                render={({ field: { onChange, onBlur, value } }) => (
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="vi"
                  >
                    <DatePicker
                      disablePast
                      label={t("form.orderDate")}
                      format="DD/MM/YYYY"
                      onChange={(date) => onChange(date ? date.toDate() : null)}
                      value={value ? dayjs(value) : null}
                      minDate={today}
                      defaultValue={dayjs(new Date())}
                    />
                  </LocalizationProvider>
                )}
              />

              <Controller
                control={control}
                name="orderTime"
                render={({ field: { onChange, onBlur, value } }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label={t("form.orderTime")}
                      ampm={false}
                      onChange={onChange}
                      value={value ? dayjs() : null}
                      defaultValue={dayjs().add(30, "m")}
                      disablePast
                    />
                  </LocalizationProvider>
                )}
              />
            </Box>
            <Controller
              control={control}
              name="email"
              rules={{
                required: t("form.required"),
                validate: (value) =>
                  Validate.email(value) || t("form.invalidEmail"),
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  autoComplete="off"
                  label={t("general.email")}
                  placeholder={t("general.email")}
                  name="email"
                  required
                  onBlur={onBlur}
                  value={value}
                  onChange={onChange}
                  fullWidth
                />
              )}
            />
            <Controller
              control={control}
              name="notes"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  label={t("form.comment")}
                  placeholder={t("form.comment")}
                  name="notes"
                  multiline
                  rows={8}
                  onBlur={onBlur}
                  value={value}
                  onChange={onChange}
                  fullWidth
                />
              )}
            />

            <Button
              className="submit-btn"
              variant="contained"
              type="submit"
              disabled={loading || !isTimeValid}
            >
              {loading ? (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CircularProgress
                    size={24}
                    sx={{ color: "white", marginRight: "8px" }}
                  />
                  {t("form.send")}
                </Box>
              ) : (
                t("form.send")
              )}
            </Button>
          </form>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              {t("Email Sent: Your email has been sent successfully!")}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
