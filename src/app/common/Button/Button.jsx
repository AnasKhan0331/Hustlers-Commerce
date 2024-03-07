import React from 'react'
import Button from '@mui/material/Button';


const ButtonComp = ({
    text,
    bgColor = "#fff",
    width = "auto",
    height = "auto",
    color = "#f7f7f7",
    variant,
    fontSize = "12px",
    onClick,
    type,
    sx = {}
}
) => {
    return (
        <Button
            variant={variant}
            type={type}
            onClick={onClick} sx={{ width: width, height: height, fontSize: fontSize, backgroundColor: bgColor, color: color, ...sx }}>
            {text}
        </Button>
    )
}

export default ButtonComp