import { toast } from "react-toastify";

export const tostify = (text, type) => {
  if (type === "success") {
    toast.success(text);
  }

  if (type === "error") {
    toast.error(text);
  }
  if (type === undefined) {
    toast.success(text);
  }
};
