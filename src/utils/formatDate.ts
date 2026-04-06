const MONTHS = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const formatDate = (d: string): string => {
  const [, m, day] = d.split("-");
  return `${parseInt(day)} ${MONTHS[parseInt(m)]}`;
};
