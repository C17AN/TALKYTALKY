import BaseCard from "components/common/BaseCard/BaseCard";
import BaseSubtitle from "components/common/BaseSubtitle/BaseSubtitle";
import Scenario from "components/Scenario/Scenario";
import TestList from "components/TestList/TestList";
import VoiceRecorder from "components/VoiceRecorder/VoiceRecorder";
import React from "react";

const TestWrapper = () => {
  return (
    <>
      <BaseSubtitle text="예문 목록" />
      <BaseCard className="block">
        <TestList />
        {/* <div className="recorder-wrapper w-4/5">
          <Scenario />
          <VoiceRecorder />
        </div> */}
      </BaseCard>
    </>
  );
};

export default TestWrapper;
