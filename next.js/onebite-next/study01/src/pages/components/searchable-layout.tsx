import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import style from "./searchable-layout.module.css";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [searchKeyword, setSearchKeyrod] = useState("");
  const router = useRouter();
  const q = router.query.q as string;
  useEffect(() => {
    setSearchKeyrod(q);
  }, [q]);
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyrod(e.target.value);
  };
  const onSubmit = () => {
    if (!searchKeyword || q === searchKeyword) return;
    router.push(`/search?q=${searchKeyword}`);
  };
  const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          type="text"
          placeholder="Input Keyword..."
          value={searchKeyword}
          onChange={onChangeSearch}
          onKeyDown={onKeydown}
        />
        <button onClick={onSubmit}>Search</button>
      </div>
      <div>{children}</div>
    </div>
  );
}
