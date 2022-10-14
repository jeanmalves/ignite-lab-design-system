import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { SignIn } from "./Signin";

export default {
  title: 'Components/Sign In',
  component: SignIn,
  args: {},
  argTypes: {}
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'amarildo.silva@teste.com');
    userEvent.type(canvas.getByPlaceholderText('******'), '123123');

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      expect(canvas.getByText('Login realizado!')).toBeInTheDocument();
    })
  }
}
