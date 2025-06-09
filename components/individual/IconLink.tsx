import { IconButton, Typography } from "@mui/material";
import { ReactNode } from "react";

/**
 * @type {IconLinkProps}
 */
type IconLinkProps = {
  href: string;
  child: ReactNode;
  color?: string;
  name?: string;
  nameColor?: string;
};

/**
 * @fileoverview Link wrapper for icons shown in the footer
 */
const IconLink = (props: IconLinkProps) => {
  return (
    <IconButton
      href={props.href}
      sx={{
        ...(props.color ? { color: props.color } : {}),
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
      target={props.href.includes("614") ? "_parent" : "_blank"}
      rel="noopener"
    >
      {props.child}
      {props.name && (
        <Typography variant="body1" sx={{ fontSize: '1rem', color: props.nameColor || props.color }}>
          {props.name}
        </Typography>
      )}
    </IconButton>
  );
};
export default IconLink;
