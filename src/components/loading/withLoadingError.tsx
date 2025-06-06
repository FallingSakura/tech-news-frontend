"use client";
import React from "react";
import useLoadFunction from "@/hooks/useLoadFunction";
import Processing from "./ProcessingCmp";
import ErrorPage from "./ErrorPage";

interface WithLoadingErrorOptions {
  url: string;
}

function withLoadingError<T>(
  WrappedComponent: React.FC<{ data: T }>,
  options: WithLoadingErrorOptions,
) {
  const EnhancedComponent: React.FC = () => {
    // get loading state
    const { loading, error, data } = useLoadFunction<T>(options.url);

    if (loading) {
      return <Processing />;
    }
    if (error) {
      return <ErrorPage error={error}></ErrorPage>;
    }
    if (!data) {
      return <ErrorPage error="No data available" />;
    }
    // 确保 data 不为 null
    return <WrappedComponent data={data as T} />;
  };

  return EnhancedComponent;
}

export default withLoadingError;
