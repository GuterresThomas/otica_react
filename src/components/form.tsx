'use client'


import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
   
  export default function EnviarFormulario() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [curriculo, setCurriculo] = useState<null | File>(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    
    
    const handleFormSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    
      console.log('Form Data:', {
        nome,
        email,
        telefone,
        mensagem,
        curriculo
      });
    
      const formData = new FormData();
      formData.append('nome', nome);
      formData.append('email', email);
      formData.append('telefone', telefone);
      formData.append('mensagem', mensagem);
    
      if (curriculo) {
        formData.append('curriculo', curriculo, curriculo.name);
      }
    
      try {
        const response = await axios.post('https://otica-back.vercel.app/enviarformulario', formData);
    
        console.log('Server Response:', response.data);
    
        if (response.data.success) {
          setSuccessMessage(response.data.success);
          alert('Sucesso ao enviar formulário!');
        } else if (response.data.error) {
          setErrorMessage(response.data.error);
        }
      } catch (error) {
        console.error('Erro ao enviar o formulário:', error);
        setErrorMessage('Ocorreu um erro ao enviar o formulário.');
      }
    };
    
  
  
    return (
      <div className="m-4">
        <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Trabalhe conosco
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Insira seus dados no formulário abaixo!
        </Typography>
        <form onSubmit={handleFormSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Seu Nome
            </Typography>
            <Input
            size="lg"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)} crossOrigin={undefined}            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Seu Email
            </Typography>
            <Input
            size="lg"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} crossOrigin={undefined}            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Telefone
            </Typography>
            <Input
            size="lg"
            placeholder="Seu telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)} crossOrigin={undefined}            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Mensagem
            </Typography>
            <Textarea
              size="lg"
              placeholder="Sua mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Anexar Currículo
            </Typography>
            <Input
            size="lg"
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setCurriculo(e.target.files[0]);
              }
            }} crossOrigin={undefined}            />
          </div>
          <Button className="mt-6" fullWidth type="submit" onClick={handleFormSubmit}>
            Enviar
          </Button>
        </form>
      </Card>
      </div>
    );  
  }