"use client";

import { useRouter } from "next/navigation";

const RemoveBlogBtn = ({ id }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = confirm(
      "Are you sure you want to delete the following blog post?"
    );

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/posts?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <div>
      <button
        onClick={handleDelete}
        className="text-cyan-600 hover:text-cyan-800 active:text-green-400"
      >
        Delete
      </button>
    </div>
  );
};

export default RemoveBlogBtn;
