import styled from "styled-components";

interface LoginInputProps {
  placeholder: string;
  value: any;
  onChange: any;
  onKeyUp?: any;
  type?: any;
}

const LoginInput: React.FC<LoginInputProps> = ({
  placeholder,
  value,
  onChange,
  onKeyUp,
  type,
}) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      onKeyUp={onKeyUp}
    />
  );
};

const Input = styled.input`
  width: 312px;
  height: 48px;
  padding: 13px 12px;
  background-color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 4px;
  border: 2px solid #eaecef;
  cursor: text;
`;

export default LoginInput;
