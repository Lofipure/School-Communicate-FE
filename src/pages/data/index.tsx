import * as React from 'react';
import './index.less';
import { Tabs } from 'antd';
import { tabConfig } from './config';
const { TabPane } = Tabs;

const Data = () => {
  React.useEffect(() => {}, []);
  return (
    <div className="data-page-container mobile-no-margin">
      <Tabs>
        {tabConfig.map((item, index: number) => (
          <TabPane
            tab={
              <span>
                {item.icon}
                {item.tab}
              </span>
            }
            key={index}
          >
            {item.children}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Data;
