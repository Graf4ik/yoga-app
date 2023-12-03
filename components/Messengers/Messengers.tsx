import { FC } from 'react';
import styles from 'styles/Home.module.scss';
import {
  Box, Image, Popover, PopoverBody, PopoverContent, PopoverTrigger, Tooltip,
} from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';

const Messengers:FC = () => (
  <div className={styles.messengers}>
    <Popover closeOnBlur>
      <PopoverTrigger>
        <Box
          tabIndex={0}
          role="button"
          aria-label="Some box"
          p={3.5}
          borderRadius="50%"
          boxShadow="sm"
          bg="green.300"
        >
          <Image className={styles.iconMessage} src="/iconMessage.svg" alt="iconMessenger" />
        </Box>
      </PopoverTrigger>
      <PopoverContent width="80px" bg="none" border="none">
        <PopoverBody ml="3px">
          <Tooltip placement="left" hasArrow label="Телефон">
            <Box>
              <SocialIcon
                className={styles.iconSocial}
                target="_blank"
                fgColor="#fff"
                url="tel:+79261891973"
              />
            </Box>
          </Tooltip>
          <Tooltip placement="left" hasArrow label="Почта">
            <Box>
              <SocialIcon
                className={styles.iconSocial}
                target="_blank"
                fgColor="#fff"
                url="mailto:katerina-grafova@mail.ru"
              />
            </Box>
          </Tooltip>
          <Tooltip placement="left" hasArrow label="ВКонтакте">
            <Box>
              <SocialIcon
                className={styles.iconSocial}
                target="_blank"
                fgColor="#fff"
                url="https://vk.com/ekaterinagrafovayoga"
              />
            </Box>
          </Tooltip>
          <Tooltip placement="left" hasArrow label="Instagram">
            <Box>
              {' '}
              <SocialIcon
                className={styles.iconSocial}
                target="_blank"
                fgColor="#fff"
                url="https://instagram.com/katerinagrafova"
              />
            </Box>
          </Tooltip>
          <Tooltip placement="left" hasArrow label="Whatsapp">
            <Box>
              {' '}
              <SocialIcon
                className={styles.iconSocial}
                target="_blank"
                fgColor="#fff"
                url="https://api.whatsapp.com/send?phone=79261891973"
              />
            </Box>
          </Tooltip>
          <Tooltip placement="left" hasArrow label="Telegram">
            <Box>
              <SocialIcon
                className={styles.iconSocial}
                target="_blank"
                fgColor="#fff"
                url="https://t.me/EkaterinaGrafova"
              />
            </Box>
          </Tooltip>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  </div>
);

export default Messengers;
