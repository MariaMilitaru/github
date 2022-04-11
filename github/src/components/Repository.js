import React from "react";

export default function Repository({ repo }) {
  return (
    <>
      <div>{repo.full_name}</div>
      <div>Created at: {repo.created_at}</div>
      <div>Lang: {repo.language}</div>
    </>
  );
}
