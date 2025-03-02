"use client";

import React, { useState } from "react";

export default function Searchbar() {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={onChangeSearch} value={search} />
      <button>search</button>
    </div>
  );
}
