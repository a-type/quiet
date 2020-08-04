import * as React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@material-ui/core';

export type LinkProps = Omit<RouterLinkProps, 'color'> &
  Pick<MuiLinkProps, 'underline' | 'color'>;

export const Link = React.forwardRef<HTMLSpanElement, LinkProps>(function (
  props: LinkProps,
  ref,
) {
  return <MuiLink component={RouterLink} {...props} ref={ref} />;
});
