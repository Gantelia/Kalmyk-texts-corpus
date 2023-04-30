import './asterisk.scss';

type AsteriskProps = {
  className: string;
};

function Asterisk({ className }: AsteriskProps) {
  return <span className={`asterisk ${className}`}>* - обязательные поля</span>;
}

export default Asterisk;
