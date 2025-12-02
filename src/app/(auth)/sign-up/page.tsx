import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { Suspense } from "react";

import { SignUpForm } from "@/components/sign-up-form";
import { getCurrentSession } from "@/lib/dal";

export default function SignUpPage() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        }
      >
        <AuthCheck />
        <SignUpForm />
      </Suspense>
    </>
  );
}

async function AuthCheck() {
  const session = await getCurrentSession();

  if (session) {
    redirect("/dashboard");
  }

  return null;
}
