
export const formatDateRange = (startDate: string | null, endDate: string | null): string => {
  if (startDate && endDate) {
    return `${new Date(startDate).getFullYear()}-${new Date(endDate).getFullYear()}`;
  } else if (endDate) {
    return new Date(endDate).getFullYear().toString();
  } else if (startDate) {
    return `${new Date(startDate).getFullYear()}-Present`;
  }
  return "Ongoing";
};
