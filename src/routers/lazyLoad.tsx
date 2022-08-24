import { Spin } from "antd";
import { Suspense } from "react";

const lazyLoad = (Comp: React.LazyExoticComponent<any>) => {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        />
      }
    >
      <Comp />
    </Suspense>
  );
};

export default lazyLoad;
