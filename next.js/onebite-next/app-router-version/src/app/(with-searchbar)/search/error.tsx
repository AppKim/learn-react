// server, client 둘다 실행 되어야 하기 때문에
"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void; // client에서만 실행되므로 서버로 리퀘스트하지는 않음
}) {
  const router = useRouter();
  useEffect(() => {
    console.log(error.message);
  }, [error]);

  return (
    <div>
      <h3>Search Occured Error!</h3>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh(); // 현재 페이지에 필요한 서버컴포넌트를 다시 불러옴
            reset(); // 에러 상태를 초기화, 컴포넌트를 다시 렌더링
          });
        }}
      >
        reload
      </button>
    </div>
  );
}
