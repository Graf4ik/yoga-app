import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import Heading from 'components/Heading/Heading';
import { Box } from '@chakra-ui/react';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <Box>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="404" />
      <Heading text="Something is going wrong..." />
    </Box>
  );
};

export default Error;
