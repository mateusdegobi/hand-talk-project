// import IconImage from '@src/Components/IconImage';
import React, { createRef, useImperativeHandle, useRef, useCallback, useState } from 'react';
import { TouchableOpacity, Animated, TouchableWithoutFeedback, View } from 'react-native';

import { BackgroundFade, ContainerModal, FakeView, Header, Modal, Title } from './styles';

const modalPopUpComponentRef = createRef();
interface ShowProps {
  component: JSX.Element;
  title?: string;
  maxWidth?: number;
  hideHeader?: boolean;
  lockBackButtonToNotClose?: boolean;
}
export const modalPopUpControllers = {
  show: (props: ShowProps) => modalPopUpComponentRef?.current?.show(props),
  hide: () => modalPopUpComponentRef?.current?.hide(),
};
export default function ModalPopUpComponent() {
  const [visible, setVisible] = useState(false);
  const [component, setComponent] = useState(<View />);
  const [title, setTitle] = useState('');
  const [maxWidth, setMaxWidth] = useState();
  const [config, setConfig] = useState({
    hideHeader: false,
    lockBackButtonToNotClose: false,
  });
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const hide = useCallback(() => {
    fadeAnim.setValue(1);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setVisible(false);
      setComponent(<View />);
      setTitle('');
      setMaxWidth(undefined);
      setConfig({ hideHeader: false, lockBackButtonToNotClose: false });
    }, 300);
  }, [fadeAnim]);
  const show = useCallback(
    ({
      title: titleParam,
      component: componentParam,
      hideHeader,
      lockBackButtonToNotClose,
    }: ShowProps) => {
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();

      setComponent(componentParam);

      if (titleParam) setTitle(titleParam);

      setVisible(true);
      setConfig((curr) => ({
        ...curr,
        hideHeader: hideHeader || false,
        lockBackButtonToNotClose: lockBackButtonToNotClose || false,
      }));
    },
    [fadeAnim]
  );

  const controller = { hide, show };

  useImperativeHandle(modalPopUpComponentRef, () => controller);

  const handleCloseModal = () => {
    if (!config.lockBackButtonToNotClose) {
      hide();
    }
  };

  return (
    <Modal visible={visible} onRequestClose={handleCloseModal} transparent>
      <TouchableWithoutFeedback onPress={handleCloseModal}>
        <BackgroundFade>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <ContainerModal maxWidth={maxWidth} style={{ opacity: fadeAnim }}>
              {!config.hideHeader && (
                <Header>
                  <FakeView />
                  <Title>{title}</Title>

                  {config.lockBackButtonToNotClose && <View />}
                </Header>
              )}
              {component}
            </ContainerModal>
          </TouchableWithoutFeedback>
        </BackgroundFade>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
