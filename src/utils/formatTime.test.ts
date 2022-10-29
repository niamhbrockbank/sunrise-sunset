import formatTime from "./formatTime";

test("afternoon hours are converted right", () => {
  expect(formatTime("2:46:55 PM")).toBe("14:46");
  expect(formatTime("10:46:55 PM")).toBe("22:46");
});

test("all instances have four time digits", () => {
  expect(formatTime("8:55:43 AM")).toBe("08:55");
});

test.todo("adjust for different time zones");
