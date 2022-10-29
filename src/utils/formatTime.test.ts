import moment from "moment";
import formatTime from "./formatTime";

test("afternoon hours are converted right", () => {
  expect(formatTime("2:46:55 PM")).toBe(moment().isDST() ? "15:46" : "14:46");
  expect(formatTime("10:46:55 PM")).toBe(moment().isDST() ? "23:46" : "22:46");
  expect(formatTime("12:46:55 PM")).toBe(moment().isDST() ? "13:46" : "12:46");
  expect(formatTime("11:46:55 PM")).toBe(moment().isDST() ? "00:46" : "23:46");
});

test("all instances have four time digits", () => {
  expect(formatTime("8:55:43 AM")).toBe(moment().isDST() ? "09:55" : "08:55");
  expect(formatTime("9:36:43 AM")).toBe(moment().isDST() ? "10:36" : "09:36");
  expect(formatTime("11:55:43 AM")).toBe(moment().isDST() ? "12:55" : "11:55");
  expect(formatTime("12:55:43 AM")).toBe(moment().isDST() ? "01:55" : "00:55");
});

test.todo("adjust for different time zones");
