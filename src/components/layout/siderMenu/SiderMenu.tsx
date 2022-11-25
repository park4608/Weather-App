import React from 'react';
import { Layout, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import styled from 'styled-components';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import { Korea, Japan, China, Ghana, Kenya, SouthAfrica, Germany, France, UK, Netherlands, Canada, Mexico, USA, Argentina, Brazil, Uruguay } from './FlagImg';

type MenuItem = Required<MenuProps>['items'][number];

const Icon = styled.img`
  width: 20px;
  height: 15px;
`;

function getItem(label: React.ReactNode, key?: React.Key | null, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Asia', 'sub1', <SettingOutlined />, [getItem('Korea', '1', <Icon src={Korea} />), getItem('Japan', '2', <Icon src={Japan} />), getItem('China', '3', <Icon src={China} />)]),
  getItem('North America', 'sub2', <AppstoreOutlined />, [getItem('USA', '4', <Icon src={USA} />), getItem('Canada', '5', <Icon src={Canada} />), getItem('Mexico', '6', <Icon src={Mexico} />)]),
  getItem('South America', 'sub3', <AppstoreOutlined />, [
    getItem('Brazil', '7', <Icon src={Brazil} />),
    getItem('Argentina', '8', <Icon src={Argentina} />),
    getItem('Uruguay', '9', <Icon src={Uruguay} />),
  ]),
  getItem('Europe', 'sub4', <SettingOutlined />, [
    getItem('Germany', '10', <Icon src={Germany} />),
    getItem('France', '11', <Icon src={France} />),
    getItem('United Kingdom', '12', <Icon src={UK} />),
    getItem('Netherlands', '13', <Icon src={Netherlands} />),
  ]),
  getItem('Africa', 'sub5', <SettingOutlined />, [
    getItem('Republic of South Africa', '14', <Icon src={SouthAfrica} />),
    getItem('Ghana', '15', <Icon src={Ghana} />),
    getItem('Kenya', '16', <Icon src={Kenya} />),
  ]),
  //   getItem('Oceania', 'sub6', <SettingOutlined />, [getItem('Option 12', '12', <Icon src={} />), getItem('Option 13', '13', <Icon src={} />)]),
];

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};

const SideMenu = styled(Menu)`
  background-color: #060606;
  color: #fff;
  width: 100%;
  &:i {
    color: #fff;
  }
`;

const SiderMenu = () => {
  return (
    <>
      <SideMenu onClick={onClick} mode='vertical' items={items} />
    </>
  );
};

export default SiderMenu;
