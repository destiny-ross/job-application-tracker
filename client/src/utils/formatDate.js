import { format } from "date-fns";

const formatDate = (ISOString) => {
  return format(new Date(ISOString), "MMM dd, yyyy");
};

export default formatDate;
