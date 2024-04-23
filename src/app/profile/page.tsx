'use client'

import { UserAuth } from "../context/AuthProvider";

export default function ProfilePage() {
  const { user } = UserAuth();

  return (
    <div>
      <h1>{user?.displayName}</h1>
    </div>
  );
}