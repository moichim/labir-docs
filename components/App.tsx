"use client"

import { HistogramResolutionInputHeadless, HistogramResolutionSliderHeadless, OpacitySliderDefault, RangeButtonAutoHeadless, RangeButtonFullHeadless, useThermalContext, useThermalGroupInstancesState, RangeHeadless } from "@labir/react-bridge"
import { useEffect } from "react";

export const App: React.FC = () => {

    	const manager = useThermalContext();

        const registry = manager.addOrGetRegistry( "registry_id" );

        const group = registry.groups.addOrGetGroup( "group_id" );

        const instances = useThermalGroupInstancesState(group, "app");

        useEffect( () => {
            registry.loadOneFile( {
                thermalUrl: "/image-thermal 2024-02-12 10-15-07.lrc"
            }, group.id );
        }, [] );

    return <div>
        <OpacitySliderDefault registry={registry}/>
      <RangeButtonFullHeadless registry={registry}></RangeButtonFullHeadless>
      <RangeButtonAutoHeadless registry={registry} />
      <HistogramResolutionInputHeadless registry={registry} />

      <HistogramResolutionInputHeadless registry={registry} />
      <HistogramResolutionInputHeadless registry={registry} />

      <HistogramResolutionSliderHeadless registry={registry} />

      <RangeHeadless
        registry={registry}
        step={0.1}
        renderSkeleton={() => <article>NAčítačka</article>}
        rangeOverride={undefined}
        handleBG="blue"
        handleColor="yellow"
        ticksLabelColor="green"
        ticksLineColor="blue"
        histogramSizeInPx={80}
        histogramBorderColor="lightgray"
        histogramBarBackground="blue"
        histogramBackground="yellow"
        // histogramBorderWidthInPx={0}
      />
      <RangeHeadless
        registry={registry}
        step={0.2}
        renderSkeleton={() => <article>NAčítačka</article>}
        trackSizeInPx={40}
        histogramSizeInPx={200}
        histogramBorderWidthInPx={0}
      />
      <RangeHeadless
        registry={registry}
        step={1}
        renderSkeleton={() => <article>NAčítačka</article>}
        trackSizeInPx={50}
      />
    </div>

}