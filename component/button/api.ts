import React from 'react';

export enum ButtonType {
    'main',         
    'primary',      
    'danger'        
}

export enum ButtonSize {
    'large',       
    'default',      
    'small'         
}

export interface ButtonProps {
    type ?: ButtonType,
    size ?: ButtonSize,
    icon ?: string,
    disabled ?: boolean,
    loading ?: boolean,
    onClick ?: React.MouseEventHandler<HTMLElement> 
}

export interface ButtonState {
    loading ?: boolean | { delay ?: number }
}