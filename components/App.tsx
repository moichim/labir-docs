"use client";

import { HistogramResolutionInputHeadless, HistogramResolutionSliderHeadless, OpacitySliderDefault, Orientation, RangeButtonAutoHeadless, RangeButtonFullHeadless, RangeHeadless, ThermalInstance, useThermalContext, useThermalGroupInstancesState } from "@labir/react-bridge";
import React, { useEffect } from "react";

export const App: React.FC = () => {
  const manager = useThermalContext();

  const registry = manager.addOrGetRegistry("registry_id");

  const group = registry.groups.addOrGetGroup("group_id");

  const instances = useThermalGroupInstancesState(group, "app");

  useEffect(() => {
    registry.loadOneFile(
      {
        thermalUrl: "/image-thermal 2024-02-12 10-15-07.lrc",
      },
      group.id
    );
  }, []);

  return (
    <div>

      <OpacitySliderDefault registry={registry} />
      <RangeButtonFullHeadless registry={registry}></RangeButtonFullHeadless>
      <RangeButtonAutoHeadless registry={registry}/>
      <HistogramResolutionInputHeadless registry={registry} />

      <HistogramResolutionInputHeadless registry={registry} />
      <HistogramResolutionInputHeadless registry={registry} />

      <HistogramResolutionSliderHeadless registry={registry} />

      <RangeHeadless
        registry={registry}
        step={0.1}
        renderSkeleton={() => <article>NAčítačka</article>}
        rangeOverride={undefined}
        histogramSizeInPx={80}
        histogramBorderWidthInPx={0}
        histogramBorderColor="lightgray"
        histogramBarBackground="black"
        histogramBackground="#ddd"
        // histogramBorderWidthInPx={0}
      />

      {instances.value.map( instance => <ThermalInstance key={instance.id} instance={instance}/> )}

      <h2 className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">Vertical scale</h2>

      <RangeHeadless
        registry={registry}
        step={0.2}
        renderSkeleton={() => <article>NAčítačka</article>}
        trackSizeInPx={40}
        histogramSizeInPx={200}
        histogramBorderWidthInPx={0}
        orientation={Orientation.VERTICAL}
      />

      <h2 className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">Colorised scale</h2>


      <RangeHeadless
        registry={registry}
        step={1}
        renderSkeleton={() => <article>NAčítačka</article>}
        trackSizeInPx={50}
        histogramSizeInPx={200}
        handleBG="blue"
        handleColor="yellow"
        ticksLabelColor="green"
        ticksLineColor="blue"
        histogramBackground="lightgray"
        histogramBorderColor="white"
        histogramBarBackground="blue"
      />
    </div>
  );
};
