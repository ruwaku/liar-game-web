import { useEffect, useLayoutEffect, useState } from "react";

interface IUseMountedOptions {
  beforeRender?: boolean;
}
export default function useMounted(options?: IUseMountedOptions) {
  const [mounted, setMounted] = useState(false);
  const $useEffect = options?.beforeRender ? useLayoutEffect : useEffect;
  $useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  return mounted;
}
