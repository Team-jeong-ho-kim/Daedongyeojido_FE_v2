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
  width: 480px;
  height: 62.5px;
  padding: 15px;
  background-color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 10px;
  border: 2px solid #eaecef;
  padding-left: 24px;
`;

export default LoginInput;
