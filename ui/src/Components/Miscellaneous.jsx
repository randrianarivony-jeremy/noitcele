import { useToast } from '@chakra-ui/react';
import { useLockBodyScroll } from '@uidotdev/usehooks';

export const LockScroll = () => {
  return useLockBodyScroll();
};

export const IncompleteToast = () => {
  const toast = useToast();
  return toast({
    status: 'error',
    description: 'Vote incomplet',
    isClosable: true,
    position: 'top',
  });
};
