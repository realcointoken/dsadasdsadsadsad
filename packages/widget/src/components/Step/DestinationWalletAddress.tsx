import type { Step } from '@lifi/sdk';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import WalletIcon from '@mui/icons-material/Wallet';
import { Box, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CircularIcon } from './CircularProgress.style';
import { LinkButton } from './StepProcess.style';

export const DestinationWalletAddress: React.FC<{
  step: Step;
  toAddress: string;
  toAddressLink: string;
}> = ({ step, toAddress, toAddressLink }) => {
  const { t } = useTranslation();
  const isDone = step.execution?.status === 'DONE';
  return (
    <Box px={2} py={1}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <CircularIcon status={isDone ? 'DONE' : 'NOT_STARTED'}>
          <WalletIcon
            color={isDone ? 'success' : 'inherit'}
            sx={{
              position: 'absolute',
              fontSize: '1rem',
            }}
          />
        </CircularIcon>
        <Typography ml={2} fontSize={14} fontWeight={400}>
          {isDone
            ? t('swap.sentToAddress', {
                address: toAddress,
              })
            : t('swap.sendToAddress', {
                address: toAddress,
              })}
        </Typography>
        <Box
          ml={2}
          sx={{
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-end',
          }}
        >
          <LinkButton
            size="small"
            edge="end"
            LinkComponent={Link}
            href={toAddressLink}
            target="_blank"
            rel="nofollow noreferrer"
          >
            <LinkRoundedIcon />
          </LinkButton>
        </Box>
      </Box>
    </Box>
  );
};
