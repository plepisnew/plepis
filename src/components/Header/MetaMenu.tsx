import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Button,
  ButtonProps,
  Divider,
  Menu,
  MenuItem,
  MenuProps,
  Switch,
  Typography
} from '@mui/material';
import { styled } from '@/theme';
import ContactItem from './ContactItem';
import RowStack from '@/components/auxiliary/RowStack';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => {
  const { main, contrastText } = theme.palette.z4;
  return {
    '& .MuiPaper-root': {
      marginTop: theme.spacing(2),
      backgroundColor: main,
      color: contrastText
    },
    '& .MuiDivider-root': {
      backgroundColor: theme.palette.z2.main,
      margin: `0 ${theme.spacing(1)}`
    }
  };
});

const StyledButton = styled((props: ButtonProps) => <Button variant="outlined" {...props} />)(
  ({ theme }) => ({
    paddingRight: theme.spacing(1)
  })
);

const MetaMenu: React.FC = () => {
  const [metaAnchorEl, setMetaAnchorEl] = useState<HTMLElement | null>();
  const [infraAnchorEl, setInfraAnchorEl] = useState<HTMLElement | null>();

  const handleMetaClose = () => setMetaAnchorEl(null);
  const handleInfraClose = () => setInfraAnchorEl(null);

  const handleMeta = (e: React.MouseEvent<HTMLElement>) => setMetaAnchorEl(e.currentTarget);
  const handleInfra = (e: React.MouseEvent<HTMLElement>) => setInfraAnchorEl(e.currentTarget);

  const metaOpen = Boolean(metaAnchorEl);
  const infraOpen = Boolean(infraAnchorEl);

  return (
    <RowStack spacing={2}>
      <StyledButton color="primary" onClick={handleMeta}>
        Meta data <ArrowDropDownIcon />
      </StyledButton>
      <StyledMenu open={metaOpen} anchorEl={metaAnchorEl} onClose={handleMetaClose}>
        <MenuItem disableRipple>
          <RowStack alignCenter>
            <Typography>Debug Mode</Typography>
            <Switch />
          </RowStack>
        </MenuItem>
        <Divider />
        <ContactItem
          title="Github: @plepisnew"
          href="https://github.com/plepisnew"
          icon={<GitHubIcon />}
        />
        <ContactItem title="Email: plepis.jaunais@gmail.com" icon={<EmailIcon />} />
        <ContactItem
          title="Instagram: @ansishihi"
          href="https://instagram.com/ansishihi"
          icon={<InstagramIcon />}
        />
        <ContactItem
          title="Linkedin: Ansis Plepis"
          href="https://www.linkedin.com/in/ansis-plepis-597a84164/"
          icon={<LinkedInIcon />}
        />
      </StyledMenu>
      <StyledMenu open={infraOpen} anchorEl={infraAnchorEl} onClose={handleInfraClose}>
        <MenuItem
          sx={{
            whiteSpace: 'unset',
            width: 300
          }}
          disableRipple
        >
          What were you even expecting from &quot;Infra Data&quot; lol
        </MenuItem>
      </StyledMenu>
      <StyledButton color="secondary" onClick={handleInfra}>
        Infra data <ArrowDropDownIcon />
      </StyledButton>
    </RowStack>
  );
};

export default MetaMenu;
