import React from 'react';
import { VictoryChart, VictoryPie, VictoryBar } from 'victory';

export default function MyCharts() {

  return (
    <>
      <VictoryChart>
          
        <VictoryBar
          width={400}
          data={[
            { fave_color: 'blue', people: 563 },
            { fave_color: 'purple', people: 985 },
            { fave_color: 'yellow', people: 376 },
            { fave_color: 'orange', people: 249 },

          ]}
          x='fave_color'
          y='people'
        />

      </VictoryChart>
          
      <VictoryPie 
        width={400}
        data={[
          { snack_of_choice: 'twizzlers', qty: 58 },
          { snack_of_choice: 'peanut M&Ms', qty: 73 },
          { snack_of_choice: 'pretzels', qty: 32 },
          { snack_of_choice: 'sliced fruit', qty: 44 },
          { snack_of_choice: 'chocolate', qty: 151 },
          { snack_of_choice: 'gum', qty: 25 },
          { snack_of_choice: 'jerky', qty: 52 }
        ]}
        x='snack_of_choice'
        y='qty'
      />
          
    </>
  );
}
