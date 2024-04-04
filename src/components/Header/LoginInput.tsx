import styled from "styled-components";

interface LoginInputProps {
  placeholder: string;
  value: any;
  onChange: any;
  onKeyUp?: any;
  onKeyDown?: any;
  onFocus?: any;
  type?: any;
}

const LoginInput: React.FC<LoginInputProps> = ({
  placeholder,
  value,
  onChange,
  onKeyUp,
  type,
  onKeyDown,
  onFocus,
}) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
    />
  );
};

const Input = styled.input`
  width: 312px;
  height: 44px;
  padding: 10px 14px;
  background-color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  cursor: text;
`;

export default LoginInput;
