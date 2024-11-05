export const getContent = (data, field, locale) => {
  return locale === "tr" ? data?.[`${field}_tr`] : data?.[`${field}_en`];
};
