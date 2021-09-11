import classNames from "classnames";
import styles from "./styles.module.css";

interface IconProps {
  border?: boolean;
  className?: string;
  height?: string;
  onClick?: (e: unknown) => void;
  round?: boolean;
  src: string;
  width?: string;
}

const Icon = ({ border, className, height = '23px', onClick = () => {}, round, src, width = '23px' }: IconProps) => {
  const _className = classNames(className, styles.icon, {
    [styles.border]: border,
    [styles.round]: round,
  });
  const _style = {
    ...(src ? { backgroundImage: `url(${src})` } : {}),
    height: height || width,
    width: width,
  };

  return <div style={_style} className={_className} onClick={onClick}></div>;
};

export default Icon;