import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'


const SparkLine = ({currnetColor, id, color, data, type, height, width}) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill='color'
      border={{color: currnetColor, width: 2}}
      xName='x'
      yName='y'
      dataSource={data}
      type={type}
      tooltipSettings={{
        visible: true,
        format: '${x} : ${y}'
      }}
    >
        <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine