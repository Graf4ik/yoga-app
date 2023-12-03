import { FC } from 'react';
import styles from '../../pages/home/Home.module.scss';
import { SocialsType } from '../../constants/interfaces';

interface SocialsTypeProps {
  socials: SocialsType[],
}

const Socials: FC<SocialsTypeProps> = (props) => {
  const { socials } = props;
  if (!socials) {
    return null;
  }

  return (
    <div>
      <ul className={styles.socials}>
        {socials && socials.map(({ id, icon, path }) => (
          <li key={id}>
            <a href={path} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${icon}`} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
