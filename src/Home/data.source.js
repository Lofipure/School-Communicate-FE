import React from 'react';
import { history } from 'umi';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  // logo: {
  //   className: 'header0-logo',
  //   children: <span></span>,
  // },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#login',
          children: [
            {
              children: (
                <span>
                  <p>登录</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#register',
          children: [
            {
              children: (
                <span>
                  <p>
                    <span>注册</span>
                    <br />
                  </p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: '校友汇',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: (
          <span>
            <p>基于Web的校友联络及信息交流平台</p>
          </span>
        ),
      },
      {
        name: 'button',
        className: 'banner3-button',
        children: (
          <span
            onClick={() => {
              history.push('/register');
            }}
          >
            <p>立即注册</p>
          </span>
        ),
      },
    ],
  },
};
export const Feature00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>无额外注册费用</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>专注于交流于分型</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>隐私保护</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>对于个人敏感信息采取保护措施</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>可见的受欢迎度</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>您的每篇帖子我们都有记录</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>©2021&nbsp;All Rights Reserved</span>
      </span>
    ),
  },
};
