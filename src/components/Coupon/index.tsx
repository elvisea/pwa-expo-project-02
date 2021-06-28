import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  CouponButton,
  Divisor,
  Logo,
  Content,
  CouponInfo,
  Title,
  Validity,
} from './styles';

const Coupon: React.FC = () => {
  return (
    <CouponButton onPress={() => {}}>
      <Divisor>
        <Content>
          <Logo />
          <CouponInfo>
            <Title>Cupom de R$5</Title>
            <Validity>Válido até 23:59</Validity>
          </CouponInfo>
        </Content>
        <MaterialIcons name="keyboard-arrow-right" color="#ff6666" size={20} />
      </Divisor>
    </CouponButton>
  );
}

export default Coupon;