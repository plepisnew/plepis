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
  FormControlLabel,
  SxProps
} from '@mui/material';
import { styled } from '@/theme';
import ContactItem from './ContactItem';
import RowStack from '@/components/auxiliary/RowStack';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useDispatch, useSelector } from '@/hooks/redux';
import { selectDebug, setDebug } from '@/store/debugSlice';

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
  const { main, contrastText } = theme.palette.z5;
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
  const debug = useSelector(selectDebug);
  const dispatch = useDispatch();

  const [metaAnchorEl, setMetaAnchorEl] = useState<HTMLElement | null>();
  const handleMetaClose = () => setMetaAnchorEl(null);
  const handleMeta = (e: React.MouseEvent<HTMLElement>) => setMetaAnchorEl(e.currentTarget);
  const metaOpen = Boolean(metaAnchorEl);

  const debugStyle: SxProps = {
    color: 'white',
    borderColor: 'white',
    '&:hover': {
      borderColor: 'white'
    }
  };

  return (
    <RowStack spacing={2}>
      <StyledMenu open={metaOpen} anchorEl={metaAnchorEl} onClose={handleMetaClose}>
        <MenuItem disableRipple>
          <RowStack alignItems="center">
            <FormControlLabel
              control={
                <Switch
                  color="secondary"
                  checked={debug}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(setDebug(e.target.checked))
                  }
                />
              }
              label="Debug Mode"
              labelPlacement="start"
            />
          </RowStack>
        </MenuItem>
        <Divider />
        <ContactItem
          title="Github: @plepisnew"
          href="https://github.com/plepisnew"
          icon={<GitHubIcon htmlColor="white" />}
        />
        <ContactItem
          title="Email: plepis.jaunais@gmail.com"
          icon={<EmailIcon htmlColor="white" />}
        />
        <ContactItem
          title="Instagram: @ansishihi"
          href="https://instagram.com/ansishihi"
          icon={<InstagramIcon htmlColor="white" />}
        />
        <ContactItem
          title="Linkedin: Ansis Plepis"
          href="https://www.linkedin.com/in/ansis-plepis-597a84164/"
          icon={<LinkedInIcon htmlColor="white" />}
        />
      </StyledMenu>
      <StyledButton color="secondary" onClick={handleMeta} sx={debug ? debugStyle : {}}>
        Meta data{' '}
        <ArrowDropDownIcon
          sx={{
            transform: metaOpen ? 'rotate(180deg)' : '',
            transition: 'transform 200ms'
          }}
        />
      </StyledButton>
    </RowStack>
  );
};

export default MetaMenu;
