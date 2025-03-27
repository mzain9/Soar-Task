import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");

  return (
    <div className="flex min-h-full flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold text-secondary">Welcome</h1>
      <p className="text-primary mt-2">Use the sidebar to navigate.</p>
    </div>
  );
}
