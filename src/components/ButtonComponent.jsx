import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ButtonComponent = ({variant, color, handleClick, sx, content, size }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant={variant} color={color} onClick={handleClick} sx={sx} content={content} size={size}>
        {content}

      </Button>
    </Stack>
  );
};

export default ButtonComponent;
