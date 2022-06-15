import React, {useEffect} from "react";
import {HomeScreen} from "../screens/HomeScreen";
import {useTourGuideController} from "rn-tourguide";

const HomeScreenContainer = () => {
  const {
    canStart,
    start,
    eventEmitter,
  } = useTourGuideController();

  const handleOnStart = () => {
    if (canStart && start) {
      start();
    }
  };

  useEffect(() => {
    if (canStart && start) {
      start();
    }
  }, [canStart]);

  useEffect(() => {
    eventEmitter?.on('start', () => console.log('stop'));
    eventEmitter?.on('stop', () => console.log('stop'));
    eventEmitter?.on('stepChange', () => console.log(`stepChange`));

    return () => {
      eventEmitter?.off('*', () => null);
    };
  }, []);

  return (
    <HomeScreen
      handleOnStart={handleOnStart}
    />
  );
};

export default HomeScreenContainer;
