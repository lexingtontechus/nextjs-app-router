import Link from "next/link";

export default function NotFound() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold uppercase">404 File Not Found</h1>
          <div className="py-6">
            <span className="h-32 loading loading-bars loading-xs"></span>
            <span className="h-32 loading loading-bars loading-sm"></span>
            <span className="h-32 loading loading-bars loading-md"></span>
            <span className="h-32 loading loading-bars loading-lg"></span>
          </div>
          <button className="btn btn-primary">
            <Link href="/" alt="Home">
              Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
