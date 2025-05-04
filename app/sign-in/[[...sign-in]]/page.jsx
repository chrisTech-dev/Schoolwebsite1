// app/sign-in/[[...sign-in]]/page.js
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn afterSignInUrl="/announcements" afterSignUpUrl="/announcements" />
    </div>
  );
}
