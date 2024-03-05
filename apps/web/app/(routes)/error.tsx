"use client"; // Error components must be Client Components
import Button from "@/components/ui/button";
import { useEffect, useState } from "react";
import useMounted from "../hooks/useMounted";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isCoolTime, setIsCoolTime] = useState(true);
  useEffect(() => {
    console.error(error);
    const timeout = setTimeout(() => setIsCoolTime(false), 1600);
    return () => clearTimeout(timeout);
  }, [error]);
  const refresh = () => {
    location.reload();
  };

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <p style={{ margin: "3rem 0", fontSize: "0.75rem" }}>
        오류가 발생하여 화면을 표시할 수 없습니다.
        <br />
        다시 시도 버튼을 누르거나 웹페이지를 새로고침하여 처음부터 다시 시작하세요
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
        <Button onClick={reset} disabled={isCoolTime}>
          다시 시도
        </Button>
        <Button onClick={refresh} disabled={isCoolTime}>
          새로고침 (진행 상황 초기화)
        </Button>
      </div>
    </div>
  );
}
