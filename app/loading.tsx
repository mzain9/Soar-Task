import ClipLoader from "react-spinners/ClipLoader";
export default function Loading() {
    return (
        <div className="flex h-[calc(100vh-300px)] flex-col items-center justify-center text-center">
            <ClipLoader color="var(--primary)" />
        </div>
    );
}
