export const required = value => (value ? undefined : "Value is required");
export const minLength = value =>
  value.length < 4 ? "Value must be at least 4 characters" : undefined;
export const MaxLength = value =>
  value.length > 10 ? "Value is too long" : undefined;