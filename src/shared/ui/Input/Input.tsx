import { TextField } from '@mui/material';
import './Input.css';
import { useState, type ChangeEvent, type ReactNode } from 'react';
import type React from 'react';

type InputProps = {
  id?: string;
  label?: string;
  sx?: object;
  children?: ReactNode;
  select?: boolean;
  inherit?: boolean;
  type?: string;
  className?: string;
};
export const Input: React.FC<InputProps> = ({
  id,
  label,
  sx,
  children,
  select,
  inherit,
  type,
  className,
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const customSx = inherit
    ? {
        ...sx,
        '& .MuiOutlinedInput-root': {
          '& fieldset': { borderColor: 'inherit' }, // обычное состояние
          '&:hover fieldset': { borderColor: 'inherit' }, // при hover
          '&.Mui-focused fieldset': { borderColor: 'inherit' }, // при фокусе
        },
      }
    : sx;
  return (
    <>
      <TextField
        type={type}
        select={select}
        sx={customSx}
        id={id}
        label={label}
        variant="outlined"
        className={`input ${className}`}
        value={value}
        onChange={handleChange}
      >
        {children}
      </TextField>
    </>
  );
};
