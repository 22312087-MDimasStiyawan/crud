import React from "react";

export default function EditPage({
  params,
}: {
  params: { npm: string };
}) {
  return <div>
    {atob(decodeURIComponent(params.npm))}
    </div>;
}
