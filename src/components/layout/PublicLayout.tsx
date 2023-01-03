import React, { ReactNode } from 'react';
// import Main from '../pages/Main';
// import Navigator from './navigator/Navigator';
// import Footer from './Footer';
import styles from './PublicLayout.module.scss';
import styled from 'styled-components';
import 'antd/dist/antd.min.css';
import { Layout, Menu } from 'antd';
import SiderMenu from './siderMenu/SiderMenu';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const PageHeader = styled(Header)`
  background-color: #191b1e;
`;

const PageSider = styled(Sider)`
  background-color: #060606;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageFooter = styled(Footer)`
  background-color: #191b1e;
`;

const Logo = styled.h4`
  color: #fff;
  font-size: 20px;
  padding-top: 20px;
  text-align: center;
`;

export interface Props {
  children: ReactNode;
}

export default function PublicLayout({ children }: Props) {
  return (
    <>
      <Layout style={{ height: '100%', minHeight: '500px' }}>
        <PageSider breakpoint='sm' collapsedWidth={130}>
          <div>
            <Logo>Global weather</Logo>
          </div>

          <SiderMenu />
        </PageSider>
        <Layout>
          <PageHeader></PageHeader>

          <Content
            className={styles.contents}
            style={{
              padding: 12,
              minHeight: 280,
              backgroundColor: '#333333',
            }}>
            {children}
          </Content>
          <PageFooter>footer</PageFooter>
        </Layout>
      </Layout>
    </>
  );
}
