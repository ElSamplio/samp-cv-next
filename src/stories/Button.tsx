import React from 'react';
import { Button as PrimeButton, ButtonProps as PrimeButtonProps} from 'primereact/button';

interface ButtonProps extends PrimeButtonProps{
  variant?: 'primary' | 'secondary' | 'flat';
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
 variant,
  ...props
}: ButtonProps) => {
  return <PrimeButton {...props} 
    raised={variant!=='flat'}
    text={variant==='secondary'}
    outlined={variant==='flat'}/>
};
