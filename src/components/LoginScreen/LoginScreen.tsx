import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from 'src/actions/User/ActionCreator';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import RootState from 'src/states';

const LoginScreen: React.FC = () => {
  const [inputTexts, setInputTexts] = useState({
    id: '',
    password: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector<RootState, RootState['UserState']['isLoggedIn']>(
    state => state.UserState.isLoggedIn
  );

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTexts({ ...inputTexts, [e.target.name]: e.currentTarget.value });
  };

  const onClick = () => {
    if (inputTexts.id === '' || inputTexts.password === '') return;
    dispatch(postLogin.request(inputTexts));
    setInputTexts({ id: '', password: '' });
  };

  return (
    <Wrapper>
      <Title>Cocoa</Title>
      {Object.entries(inputTexts).map(([key, value]) => {
        return (
          <Input
            type='text'
            key={key}
            name={key}
            value={value}
            placeholder={key}
            onChange={handleChange}
          />
        );
      })}
      <Button key={'loginButton'} onClick={onClick}>
        ログイン
      </Button>
    </Wrapper>
  );
};

export default LoginScreen;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 10%;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 35%;
  margin: 0 auto;
  max-width: 250px;
  font-size: 12px;
  padding: 8px;
  margin-bottom: 8px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: auto;
  margin: auto;
  font-size: 10px;
  padding: 8px;
  margin-top: 8px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
`;
