import React from "react";
import { Card } from "antd";
import {inner} from "./data";
function APIView() {
    return <Card
      title={<h1>API</h1>}
      type="inner"
    >
      <div dangerouslySetInnerHTML={{
        __html:inner
      }}></div>
    </Card>
}

export default APIView;