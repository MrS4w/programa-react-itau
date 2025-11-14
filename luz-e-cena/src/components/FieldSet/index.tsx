import styles from "./styles.module.css";

type FieldSetProps = {
  variant?: "primary" | "secondary";
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

const FieldSet = ({ children, variant = "primary" }: FieldSetProps) => {
  return (
    <fieldset
      className={`${styles.inputWrapper} ${
        variant === "primary" ? styles.primary : styles.secondary
      }`}
    >
      {children}
    </fieldset>
  );
};

export default FieldSet;
