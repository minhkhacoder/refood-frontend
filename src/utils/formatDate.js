/** @format */

export default function formatToDate(time) {
  const date = time?.createdAt?.seconds
    ? new Date(time?.createdAt?.seconds * 1000)
    : new Date();
  return new Date(date).toLocaleDateString("vi-VI");
}
