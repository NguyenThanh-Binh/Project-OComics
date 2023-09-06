import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import Footer from './Footer';


const Register: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  return (
    <div>
      <a href="/" className='hover:bg-yellow-600'>Accueil</a>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-semibold mb-4">
          1. {isSignUp ? 'Inscription' : 'Connexion'}
        </h1>
        <Form name="auth-form" onFinish={onFinish}>
          <Form.Item name="email" rules={[{ required: true, message: 'Veuillez entrer votre e-mail!' }]}>
            <Input placeholder="E-mail" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Veuillez entrer votre mot de passe!' }]}>
            <Input.Password placeholder="Mot de passe" />
          </Form.Item>
          {isSignUp && (
            <Form.Item name="confirmPassword" rules={[{ required: true, message: 'Veuillez confirmer votre mot de passe!' }]}>
              <Input.Password placeholder="Confirmez le mot de passe" />
            </Form.Item>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              {isSignUp ? "S'inscrire" : 'Se connecter'}
            </Button>
          </Form.Item>
        </Form>
        <p onClick={() => setIsSignUp(!isSignUp)} className="text-blue-500 cursor-pointer">
          {isSignUp ? 'Déjà un compte ? Se connecter' : 'Pas encore de compte ? S\'inscrire'}
        </p>
      </div>
    </div>
    <Footer /> 
    </div>
  );
};

export default Register;

/* 

import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import Footer from './Footer';


const Register: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  return (
    <div>
      <a href="/" className='hover:bg-yellow-600'>Accueil</a>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-semibold mb-4">
          1. {isSignUp ? 'Inscription' : 'Connexion'}
        </h1>
        <Form name="auth-form" onFinish={onFinish}>
          <Form.Item name="email" rules={[{ required: true, message: 'Veuillez entrer votre e-mail!' }]}>
            <Input placeholder="E-mail" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Veuillez entrer votre mot de passe!' }]}>
            <Input.Password placeholder="Mot de passe" />
          </Form.Item>
          {isSignUp && (
            <Form.Item name="confirmPassword" rules={[{ required: true, message: 'Veuillez confirmer votre mot de passe!' }]}>
              <Input.Password placeholder="Confirmez le mot de passe" />
            </Form.Item>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              {isSignUp ? "S'inscrire" : 'Se connecter'}
            </Button>
          </Form.Item>
        </Form>
        <p onClick={() => setIsSignUp(!isSignUp)} className="text-blue-500 cursor-pointer">
          {isSignUp ? 'Déjà un compte ? Se connecter' : 'Pas encore de compte ? S\'inscrire'}
        </p>
      </div>
    </div>
    <Footer /> 
    </div>
  );
};

export default Register;



*/
