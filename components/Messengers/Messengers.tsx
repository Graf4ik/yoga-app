import React, { FC, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from 'pages/home/Home.module.scss';
import { Box, Tooltip } from '@mui/material';
import { socialMedia } from 'shared/constants/socials';

const Messengers:FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const toggleClass = () => setShow(!show);

  return (
    <Box className={styles.messengers}>
      <Box className={show ? styles.open : styles.closed}>
        {socialMedia.map(({ title, url }) => (
          <Tooltip key={title} placement="left" arrow title={title}>
            <Box>
              <SocialIcon
                className={styles.iconSocial}
                target="_blank"
                fgColor="#fff"
                url={url}
              />
            </Box>
          </Tooltip>
        ))}
      </Box>
      <Box
        className={show ? styles.backgroundBtn : styles.messengersBtn}
        onClick={toggleClass}
      >
        {show ? (
          <img
            className={styles.iconMessageImg}
            src="/iconClose.svg"
            alt="iconClose"
          />
        ) : (
          <img
            className={styles.iconMessageImg}
            src="/iconMessage.svg"
            alt="iconMessageBtn"
          />
        ) }
      </Box>
    </Box>
  );
};

export default Messengers;
