import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import ButtonComp from '../Button/Button'

const CardV1 = ({
    width = "100%",
    height = "auto",
    boxShadow = "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    cardImg,
    text,
    borderRadiius = "12px",
    btnText,
    my = '15px'
}) => {
    return (
        <Box>
            <Card sx={{ width: width, height: height, boxShadow: boxShadow, borderRadius: borderRadiius, my: my }}>
                <CardContent>
                    <Typography variant="body2">
                        {text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <ButtonComp text={btnText} />
                </CardActions>
            </Card>
        </Box>
    )
}

export default CardV1