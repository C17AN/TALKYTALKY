import BaseCard from "components/common/BaseCard/BaseCard";
import BaseSubtitle from "components/common/BaseSubtitle/BaseSubtitle";
import Scenario from "components/Scenario/Scenario";
import VoiceRecorder from "components/VoiceRecorder/VoiceRecorder";
import React from "react";

const TestWrapper = () => {
  return (
    <>
      <BaseSubtitle text="문제 목록" />
      <BaseCard>
        <div className="recorder-wrapper w-4/5">
          <Scenario />
          <VoiceRecorder />
        </div>
      </BaseCard>
    </>
  );
};

export default TestWrapper;
