/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Content4 from './Content4';
import Feature3 from './Feature3';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Contact0 from './Contact0';
import Footer0 from './Footer0';

import {
  Banner10DataSource,
  Banner20DataSource,
  Banner21DataSource,
  Content40DataSource,
  Feature30DataSource,
  Feature10DataSource,
  Feature20DataSource,
  Feature11DataSource,
  Feature21DataSource,
  Feature12DataSource,
  Contact01DataSource,
  Footer00DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={Banner10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner2
        id="Banner2_0"
        key="Banner2_0"
        dataSource={Banner20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner2
        id="Banner2_1"
        key="Banner2_1"
        dataSource={Banner21DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content4
        id="Content4_0"
        key="Content4_0"
        dataSource={Content40DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature3
        id="Feature3_0"
        key="Feature3_0"
        dataSource={Feature30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature1
        id="Feature1_0"
        key="Feature1_0"
        dataSource={Feature10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Feature2_0"
        key="Feature2_0"
        dataSource={Feature20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature1
        id="Feature1_1"
        key="Feature1_1"
        dataSource={Feature11DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Feature2_1"
        key="Feature2_1"
        dataSource={Feature21DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature1
        id="Feature1_2"
        key="Feature1_2"
        dataSource={Feature12DataSource}
        isMobile={this.state.isMobile}
      />,
      <Contact0
        id="Contact0_1"
        key="Contact0_1"
        dataSource={Contact01DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer0
        id="Footer0_0"
        key="Footer0_0"
        dataSource={Footer00DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
