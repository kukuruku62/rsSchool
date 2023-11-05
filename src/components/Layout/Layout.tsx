import { Header } from '../Header/Header';
import styles from './Layout.module.scss';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};
