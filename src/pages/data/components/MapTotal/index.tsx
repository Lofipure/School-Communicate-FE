import * as React from 'react';
import { Scene } from '@antv/l7';
import { CountryLayer } from '@antv/l7-district';
import { Mapbox } from '@antv/l7-maps';
import { proviceMap } from '@/constant/city';
import dataMap from './dataMap';
import { Modal, Spin } from 'antd';
import ProviceMateCard, { MateProps } from '../ProviceMateCard';
import axios from 'axios';
import { getUserInfoByProviceCode } from '@/Api';
import './index.less';

const MapTotal = () => {
  const [spinStatus, setSpinStatus] = React.useState<boolean>(false);
  const [modalStatus, setModalStatus] = React.useState<boolean>(false);
  const [showProviceName, setShowProviceName] = React.useState<string>('???');
  const [userList, setUserList] = React.useState<MateProps[]>([]);
  const fetchData = (pCode: number) => {
    setSpinStatus(true);
    setModalStatus(true);
    axios({
      method: getUserInfoByProviceCode.method,
      url: getUserInfoByProviceCode.url + `?pCode=${pCode}`,
    })
      .then((res) => {
        setUserList(res.data);
      })
      .finally(() => {
        setSpinStatus(false);
      });
  };
  React.useEffect(() => {
    const scene = new Scene({
      id: 'map',
      logoVisible: false,
      map: new Mapbox({
        style: {},
        zoom: 4,
        maxZoom: 6,
        minZoom: 3,
      }),
    });
    scene.on('loaded', () => {
      new CountryLayer(scene, {
        fill: {
          color: 'rgb(224,98,107)',
        },
        coastlineStroke: 'rgb(229,191,123)',
        stroke: 'rgb(229,191,123)',
        provinceStroke: 'rgb(229,191,123)',
        countyStroke: 'rgb(229,191,123)',
        chinaNationalStroke: 'rgb(229,191,123)',
        nationalStroke: 'rgb(229,191,123)',
        joinBy: ['NAME_CHN', 'name'],
        onClick: (item) => {
          let targetObjName = dataMap.filter(
            (ele) => ele.code == item.feature.properties.adcode,
          )[0].name;
          let proviceCode = proviceMap.findIndex((ele) => ele == targetObjName);
          setShowProviceName(proviceMap[proviceCode]);
          fetchData(proviceCode);
        },
        popup: {
          enable: false,
        },
      });
    });
  }, []);
  return (
    <div>
      <Modal
        className="provice-mate-card"
        title={showProviceName}
        visible={modalStatus}
        onCancel={() => {
          setModalStatus(false);
        }}
        onOk={() => {
          setModalStatus(false);
        }}
      >
        <Spin spinning={spinStatus}>
          <ProviceMateCard matesList={userList} />
        </Spin>
      </Modal>
      <div id="map"></div>
    </div>
  );
};

export default MapTotal;
