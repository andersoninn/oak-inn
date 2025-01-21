'use client';
import React from 'react';
import { Form } from '@heroui/form';
import { Input, Textarea } from '@heroui/input';
import { Button } from '@heroui/button';

export default function FormUI() {
  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4 mt-4"
      validationBehavior="native"
      // onReset={() => setAction('reset')}
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   let data = Object.fromEntries(new FormData(e.currentTarget));

      //   setAction(`submit ${JSON.stringify(data)}`);
      // }}
    >
      <Input
        isRequired
        errorMessage="Please enter a valid username"
        labelPlacement="outside"
        name="Meu nome é"
        placeholder="Enter your username"
        type="text"
        radius="none"
        className="!bg-red-500"
        color={'warning'}
      />

      <Input
        isRequired
        errorMessage="Please enter a valid email"
        labelPlacement="outside"
        name="Meu e-mail"
        placeholder="Enter your email"
        type="email"
        radius="none"
        color={'warning'}
      />
      <Textarea
        className="max-w-xs"
        placeholder="O que você gostaria de saber ?"
        radius="none"
        color={'warning'}
      />
      <div className="flex gap-2">
        <Button
          type="submit"
          className="bg-bgMenu text-white uppercase text-xs p-4 mt-4"
          radius="none"
        >
          Enviar mensagem
        </Button>
      </div>
    </Form>
  );
}
